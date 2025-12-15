import SwiftUI
import Combine
import Carbon

@MainActor
class AppState: ObservableObject, GlobalHotKeyManagerDelegate {
    @Published var folders: [SnippetFolder] = []
    @Published var selectedFolderId: UUID?
    
    // UI State
    @Published var showToast: Bool = false
    @Published var toastMessage: String = ""
    
    private let clipboardManager = ClipboardManager()
    private let persistenceManager: PersistenceManager
    private var cancellables = Set<AnyCancellable>()
    private var hotKeyManager: GlobalHotKeyManager? // Can't be created in MainActor init directly sometimes
    
    // Settings
    @AppStorage("playAnimation") var playAnimation: Bool = true
    @AppStorage("maxRecents") var maxRecents: Int = 10
    @AppStorage("startAtLogin") var startAtLogin: Bool = false
    
    private var settingsWindow: NSWindow?
    
    init(persistenceManager: PersistenceManager = PersistenceManager()) {
        self.persistenceManager = persistenceManager
        // Initialize HotKeyManager
        let manager = GlobalHotKeyManager()
        self.hotKeyManager = manager
        
        // Load data first, then setup clipboard
        loadData() // async
        setupClipboardSubscription()
        
        manager.delegate = self
        registerGlobalHotKeys()
    }
    
    private func loadData() {
        Task {
            let loaded = await persistenceManager.loadFolders()
            if loaded.isEmpty {
                let recents = SnippetFolder(id: UUID(), name: "Recents", isSystemRecents: true, snippets: [])
                self.folders = [recents]
                self.selectedFolderId = recents.id
            } else {
                self.folders = loaded
                if !self.folders.contains(where: { $0.isSystemRecents }) {
                    let recents = SnippetFolder(id: UUID(), name: "Recents", isSystemRecents: true, snippets: [])
                    self.folders.insert(recents, at: 0)
                }
                if selectedFolderId == nil || !self.folders.contains(where: { $0.id == selectedFolderId }) {
                    self.selectedFolderId = self.folders.first(where: { $0.isSystemRecents })?.id
                }
            }
        }
    }
    
    private func saveData() {
        Task {
            let foldersToSave = self.folders
            try? await persistenceManager.saveFolders(foldersToSave)
        }
    }
    
    private func setupClipboardSubscription() {
        clipboardManager.$currentClipboardString
            .dropFirst()
            .sink { [weak self] newString in
                guard let self = self, let text = newString, !text.isEmpty else { return }
                self.addToRecents(text)
            }
            .store(in: &cancellables)
    }
    
    func addToRecents(_ text: String) {
        guard let recentsIndex = folders.firstIndex(where: { $0.isSystemRecents }) else { return }
        var recents = folders[recentsIndex]
        
        // Check if it already exists to preserve sensitivity
        var isSensitive = false
        if let existingIndex = recents.snippets.firstIndex(where: { $0.text == text }) {
            isSensitive = recents.snippets[existingIndex].isSensitive
            
            // Optimization: If it's already at index 0, do nothing
            if existingIndex == 0 { return }
        }
        
        // Dedupe / Remove old instance
        recents.snippets.removeAll { $0.text == text }
        
        // Create new snippet (updating createdAt is usually desired for "Recents")
        // But we keep the sensitivity setting.
        let newSnippet = Snippet(id: UUID(), text: text, createdAt: Date(), isSensitive: isSensitive)
        
        // Only animate if UI is active? We can always animate state.
        withAnimation {
            recents.snippets.insert(newSnippet, at: 0)
            if recents.snippets.count > 10 { // Enforce hard limit of 10
                recents.snippets = Array(recents.snippets.prefix(10))
            }
        }
        
        folders[recentsIndex] = recents
        saveData()
    }
    
    func clearRecents() {
        guard let recentsIndex = folders.firstIndex(where: { $0.isSystemRecents }) else { return }
        withAnimation {
            folders[recentsIndex].snippets.removeAll()
        }
        saveData()
    }
    
    func toggleSnippetSensitivity(folderId: UUID, snippetId: UUID) {
        guard let folderIndex = folders.firstIndex(where: { $0.id == folderId }) else { return }
        guard let snippetIndex = folders[folderIndex].snippets.firstIndex(where: { $0.id == snippetId }) else { return }
        
        // We need to mutate the snippet struct
        var snippet = folders[folderIndex].snippets[snippetIndex]
        snippet.isSensitive.toggle()
        
        // Update the array
        withAnimation {
            folders[folderIndex].snippets[snippetIndex] = snippet
        }
        saveData()
    }
    
    func quitApp() {
        NSApplication.shared.terminate(nil)
    }
    
    // ... CRUD methods similar to before ...
    func createFolder(name: String) {
        let folderName = name.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty ? "Profile \(folders.count)" : name
        let newFolder = SnippetFolder(id: UUID(), name: folderName, isSystemRecents: false, snippets: [])
        withAnimation {
            folders.append(newFolder)
            selectedFolderId = newFolder.id
        }
        saveData()
    }
    
    func deleteFolder(at id: UUID) {
        withAnimation {
            folders.removeAll { $0.id == id && !$0.isSystemRecents }
            if selectedFolderId == id {
                selectedFolderId = folders.first(where: { $0.isSystemRecents })?.id
            }
        }
        saveData()
    }
    
    func renameFolder(id: UUID, newName: String) {
        if let index = folders.firstIndex(where: { $0.id == id }) {
            folders[index].name = newName
            saveData()
        }
    }
    
    func addSnippetToFolder(folderId: UUID, text: String) {
        guard let index = folders.firstIndex(where: { $0.id == folderId }) else { return }
        let newSnippet = Snippet(id: UUID(), text: text, createdAt: Date())
        withAnimation {
            folders[index].snippets.insert(newSnippet, at: 0)
        }
        saveData()
    }
    
    func deleteSnippet(folderId: UUID, snippetId: UUID) {
        guard let folderIndex = folders.firstIndex(where: { $0.id == folderId }) else { return }
        withAnimation {
            folders[folderIndex].snippets.removeAll { $0.id == snippetId }
        }
        saveData()
    }
    
    func copyToClipboard(_ snippet: Snippet) {
        clipboardManager.copyToClipboard(snippet.text)
        showToastMessage("Copied to clipboard")
        // NOTE: We do NOT set ignoreNextChange = true anymore. 
        // User requested: "recents should update to what i am copy pasting no matter what profile i am on"
        // So even if I copy from "Work Profile", it should appear in Recents.
        // clipboardManager.ignoreNextChange = true 
    }

    func addCurrentClipboardToFolder(folderId: UUID) {
        if let text = clipboardManager.currentClipboardString, !text.isEmpty {
            addSnippetToFolder(folderId: folderId, text: text)
        }
    }
    
    // MARK: - HotKeys
    
    private func registerGlobalHotKeys() {
        // Register Cmd+Option+1 through Cmd+Option+9
        // Using Cmd+Option to avoid conflicts with system shortcuts like Cmd+1 (Finder etc).
        // Or strictly Cmd+1 if user insists (might not work well globally).
        // User asked for "Cmd+P+1".
        // Cmd(256) + P(35) + 1(18)? Carbon doesn't support 3-key chords easily as "modifiers + key".
        // You can have Cmd + P. Or Cmd + 1. Not Cmd+P+1.
        // I will map Cmd+Option+Number which is a standard global hotkey pattern.
        
        let cmdKey: UInt32 = 1 << 8
        let optionKey: UInt32 = 1 << 11
        let shiftKey: UInt32 = 1 << 9
        
        // Key codes for 1-9, 0
        let keyCodes: [UInt32] = [18, 19, 20, 21, 23, 22, 26, 28, 25, 29]
        
        for (index, code) in keyCodes.enumerated() {
            // ID = index + 1 (1...10)
            // Modifier: Cmd+Option. This is safer than just Cmd.
            hotKeyManager?.registerHotKey(id: UInt32(index + 1), keyCode: code, modifiers: cmdKey | optionKey)
        }
    }
    
    func hotKeyTriggered(id: UInt32) {
        // Find the snippet at index (id - 1) in current folder
        guard let selectedId = selectedFolderId,
              let folder = folders.first(where: { $0.id == selectedId }) else { return }
        
        let index = Int(id) - 1
        if index >= 0 && index < folder.snippets.count {
            let snippet = folder.snippets[index]
            copyAndPaste(snippet)
            // Optionally flash the menu bar icon or show a notification?
        }
    }
    
    // MARK: - Toast
    
    private func showToastMessage(_ message: String) {
        toastMessage = message
        withAnimation {
            showToast = true
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            withAnimation {
                self.showToast = false
            }
        }
    }
    
    func copyAndPaste(_ snippet: Snippet) {
        clipboardManager.copyToClipboard(snippet.text)
        
        // Hide the app to return focus to the previous application
        NSApplication.shared.hide(nil)
        
        // Wait briefly for focus to switch and clipboard to update, then paste
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
            self.paste()
        }
        
        // Toast is less useful if app is hidden, but we can keep it if the window stays open (which it won't)
    }
    
    private func paste() {
        let source = CGEventSource(stateID: .combinedSessionState)
        // Key code for 'v' is 9
        let vKeyCode: CGKeyCode = 9
        
        guard let keyDown = CGEvent(keyboardEventSource: source, virtualKey: vKeyCode, keyDown: true),
              let keyUp = CGEvent(keyboardEventSource: source, virtualKey: vKeyCode, keyDown: false) else { return }
        
        keyDown.flags = .maskCommand
        keyUp.flags = .maskCommand
        
        keyDown.post(tap: .cghidEventTap)
        keyUp.post(tap: .cghidEventTap)
    }
    
    // MARK: - Settings
    
    func openSettings() {
        if settingsWindow == nil {
            let settingsView = SettingsView()
            let window = NSWindow(
                contentRect: NSRect(x: 0, y: 0, width: 350, height: 250),
                styleMask: [.titled, .closable, .miniaturizable],
                backing: .buffered, defer: false
            )
            window.center()
            window.title = "Pastry Settings"
            window.contentView = NSHostingView(rootView: settingsView)
            window.isReleasedWhenClosed = false // We keep it alive
            settingsWindow = window
        }
        
        // Bring to front
        NSApp.activate(ignoringOtherApps: true)
        settingsWindow?.makeKeyAndOrderFront(nil)
        settingsWindow?.level = .floating // Force top
    }
}
