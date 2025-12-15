import SwiftUI

// MARK: - Design System

struct AlcoveTheme {
    static let cornerRadius: CGFloat = 20
    static let padding: CGFloat = 16
    
    static var accentGradient: LinearGradient {
        LinearGradient(
            colors: [
                Color(nsColor: NSColor(red: 0.7, green: 0.3, blue: 0.9, alpha: 1.0)), // Purple
                Color(nsColor: NSColor(red: 0.3, green: 0.5, blue: 1.0, alpha: 1.0))  // Blue
            ],
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
    }
    
    static var glassBackground: some View {
        ZStack {
            VisualEffectBlur(material: .hudWindow, blendingMode: .behindWindow, state: .active)
            Color.black.opacity(0.3) // Darken it
        }
    }
}

// Helper for NSVisualEffectView if needed, or just use SwiftUI Materials
struct VisualEffectBlur: NSViewRepresentable {
    var material: NSVisualEffectView.Material
    var blendingMode: NSVisualEffectView.BlendingMode
    var state: NSVisualEffectView.State
    
    func makeNSView(context: Context) -> NSVisualEffectView {
        let visualEffectView = NSVisualEffectView()
        visualEffectView.material = material
        visualEffectView.blendingMode = blendingMode
        visualEffectView.state = state
        return visualEffectView
    }
    
    func updateNSView(_ nsView: NSVisualEffectView, context: Context) {
        nsView.material = material
        nsView.blendingMode = blendingMode
        nsView.state = state
    }
}

struct AlcoveButtonStyle: ButtonStyle {
    var isPrimary: Bool = false
    @State private var isHovering = false
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.system(size: 13, weight: .medium))
            .foregroundStyle(isPrimary ? Color.white : Color.secondary)
            .padding(.vertical, 8)
            .padding(.horizontal, 16)
            .background(
                Group {
                    if isPrimary {
                        AlcoveTheme.accentGradient
                            .opacity(configuration.isPressed ? 0.9 : 1.0)
                            .overlay(Color.white.opacity(isHovering ? 0.1 : 0))
                    } else {
                        Color.white.opacity(isHovering ? 0.1 : 0.05)
                    }
                }
            )
            .clipShape(Capsule())
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .onHover { hover in
                withAnimation(.easeInOut(duration: 0.2)) {
                    isHovering = hover
                }
            }
    }
}

struct AlcoveTextFieldStyle: TextFieldStyle {
    @FocusState.Binding var focused: Bool
    
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .font(.system(size: 14))
            .textFieldStyle(.plain)
            .padding(12)
            .background(Color.white.opacity(0.05))
            .clipShape(RoundedRectangle(cornerRadius: 12))
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .stroke(focused ? Color.white.opacity(0.3) : Color.white.opacity(0.1), lineWidth: 1)
            )
    }
}

struct ContentView: View {
    @StateObject private var appState = AppState()
    
    @State private var showCreateProfile = false
    @State private var newProfileName = ""
    @FocusState private var isNewProfileFocused: Bool
    
    @State private var showAddStringSheet = false
    @State private var manualStringContent = ""
    @FocusState private var isAddStringFocused: Bool
    
    // Custom Dropdown State
    @State private var isProfileDropdownOpen = false
    
    // Settings Navigation (Replacing window)
    @State private var showSettings = false
    
    @State private var showDeleteConfirmation = false
    @State private var folderToDelete: SnippetFolder?
    
    // Alert state for clear recents
    @State private var showClearRecentsConfirmation = false
    
    var body: some View {
        ZStack(alignment: .top) {
            
            // Background
            AlcoveTheme.glassBackground
                .ignoresSafeArea()
            
            // Main Content (Hidden when Settings is open)
            if !showSettings {
                VStack(spacing: 0) {
                    // MARK: - Header
                    HStack(alignment: .center, spacing: 10) {
                        
                        // Profile Picker
                        ZStack(alignment: .topLeading) {
                            Button(action: {
                                withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                                    isProfileDropdownOpen.toggle()
                                }
                            }) {
                                HStack(spacing: 6) {
                                    Text(currentFolderName)
                                        .font(.system(size: 13, weight: .medium, design: .rounded))
                                        .foregroundStyle(.white) // Forced White
                                        .lineLimit(1)
                                    
                                    Image(systemName: "chevron.up.chevron.down")
                                        .font(.system(size: 9, weight: .bold))
                                        .foregroundStyle(.white.opacity(0.6)) // Forced White
                                }
                                .padding(.vertical, 6)
                                .padding(.horizontal, 10)
                                .background(Color.white.opacity(0.05))
                                .clipShape(Capsule())
                                .contentShape(Rectangle())
                            }
                            .buttonStyle(HoverButtonStyle())
                        }
                        .zIndex(100)
                        
                        Spacer()
                        
                        // Actions
                        HStack(spacing: 4) {
                            if !isRecentsSelected {
                                Button(action: {
                                    withAnimation {
                                        showAddStringSheet = true
                                        isAddStringFocused = true
                                    }
                                }) {
                                    Image(systemName: "plus")
                                        .font(.system(size: 12, weight: .semibold))
                                        .foregroundStyle(.white.opacity(0.8)) // Forced White
                                        .frame(width: 28, height: 28)
                                        .background(Color.white.opacity(0.05))
                                        .clipShape(Circle())
                                }
                                .buttonStyle(HoverButtonStyle(shape: .circle))
                                .help("Add Snippet")
                            } else {
                                // Clear Recents Button
                                Button(action: {
                                    withAnimation {
                                        showClearRecentsConfirmation = true
                                    }
                                }) {
                                    Image(systemName: "trash")
                                        .font(.system(size: 12, weight: .semibold))
                                        .foregroundStyle(.white.opacity(0.8))
                                        .frame(width: 28, height: 28)
                                        .background(Color.white.opacity(0.05))
                                        .clipShape(Circle())
                                }
                                .buttonStyle(HoverButtonStyle(shape: .circle))
                                .help("Clear Recents")
                                .disabled(currentFolder?.snippets.isEmpty ?? true)
                                .opacity(currentFolder?.snippets.isEmpty ?? true ? 0.5 : 1)
                            }
                            
                            Button(action: {
                                withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                                    showSettings = true
                                }
                            }) {
                                Image(systemName: "gearshape")
                                    .font(.system(size: 12, weight: .semibold))
                                    .foregroundStyle(.white.opacity(0.8)) // Forced White
                                    .frame(width: 28, height: 28)
                                    .background(Color.white.opacity(0.05))
                                    .clipShape(Circle())
                            }
                            .buttonStyle(HoverButtonStyle(shape: .circle))
                            .help("Settings")
                        }
                    }
                    .padding(16)
                    .zIndex(2)
                    
                    // MARK: - Content
                    if let folder = currentFolder {
                        ScrollView(.vertical, showsIndicators: false) {
                            VStack(spacing: 6) {
                                if folder.snippets.isEmpty {
                                    EmptyStateView(isRecents: folder.isSystemRecents)
                                } else {
                                    ForEach(Array(folder.snippets.enumerated()), id: \.element.id) { index, snippet in
                                        SnippetRowView(snippet: snippet, index: index + 1) {
                                            appState.copyToClipboard(snippet)
                                        }
                                        .contextMenu {
                                            Button(snippet.isSensitive ? "Reveal" : "Obscure (Invisible Ink)") {
                                                if let folder = currentFolder {
                                                    appState.toggleSnippetSensitivity(folderId: folder.id, snippetId: snippet.id)
                                                }
                                            }
                                            
                                            Button("Delete", role: .destructive) {
                                                appState.deleteSnippet(folderId: folder.id, snippetId: snippet.id)
                                            }
                                        }
                                        .transition(.opacity.combined(with: .move(edge: .bottom)))
                                    }
                                }
                            }
                            .padding(.horizontal, 12)
                            .padding(.bottom, 20)
                        }
                        .zIndex(1)
                    }
                }
                .blur(radius: (showCreateProfile || showAddStringSheet) ? 8 : 0)
                .transition(.opacity.combined(with: .move(edge: .leading)))
            } else {
                // MARK: - Settings View
                GlassySettingsView(isPresented: $showSettings, appState: appState)
                    .transition(.opacity.combined(with: .move(edge: .trailing)))
                    .zIndex(300)
            }
            
            // MARK: - Dropdown Overlay
            if isProfileDropdownOpen && !showSettings {
                Color.black.opacity(0.01)
                    .ignoresSafeArea()
                    .onTapGesture {
                        withAnimation { isProfileDropdownOpen = false }
                    }
                    .zIndex(99)
                
                VStack(alignment: .leading, spacing: 4) {
                    ForEach(appState.folders) { folder in
                        ProfileDropdownRow(
                            folder: folder,
                            isSelected: folder.id == appState.selectedFolderId,
                            onSelect: {
                                withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                                    appState.selectedFolderId = folder.id
                                    isProfileDropdownOpen = false
                                }
                            },
                            onDelete: {
                                // Trigger confirmation
                                folderToDelete = folder
                                withAnimation { showDeleteConfirmation = true }
                            }
                        )
                    }
                    
                    Divider()
                        .overlay(Color.white.opacity(0.1))
                        .padding(.vertical, 4)
                    
                    Button {
                        withAnimation {
                            isProfileDropdownOpen = false
                            showCreateProfile = true
                            isNewProfileFocused = true
                        }
                    } label: {
                        HStack {
                            Image(systemName: "plus")
                                .font(.system(size: 10, weight: .bold))
                            Text("New Profile")
                            Spacer()
                        }
                        .font(.system(size: 13, weight: .medium, design: .rounded))
                        .foregroundStyle(.secondary)
                        .padding(.vertical, 8)
                        .padding(.horizontal, 10)
                        .contentShape(Rectangle())
                    }
                    .buttonStyle(HoverListButtonStyle())
                }
                .padding(6)
                .background(.ultraThinMaterial) // More blur for dropdown
                .background(Color.black.opacity(0.5)) // Darken
                .clipShape(RoundedRectangle(cornerRadius: 16))
                .shadow(color: .black.opacity(0.3), radius: 15, x: 0, y: 10)
                .overlay(RoundedRectangle(cornerRadius: 16).stroke(.white.opacity(0.1), lineWidth: 0.5))
                .frame(width: 220)
                .position(x: 130, y: 140)
                .zIndex(100)
                .transition(.opacity.combined(with: .scale(scale: 0.95, anchor: .topLeading)))
            }
            
            // MARK: - Modals (Create Profile)
            if showCreateProfile {
                Color.black.opacity(0.4)
                    .ignoresSafeArea()
                    .onTapGesture { withAnimation { showCreateProfile = false } }
                    .zIndex(200)
                    .transition(.opacity)
                
                VStack(spacing: 20) {
                    VStack(spacing: 4) {
                        Text("New Profile")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white) // Forced White
                        Text("Create a separate space for your clips")
                            .font(.system(size: 12))
                            .foregroundStyle(.white.opacity(0.7)) // Forced White
                    }
                    
                    TextField("Profile Name", text: $newProfileName)
                        .textFieldStyle(AlcoveTextFieldStyle(focused: $isNewProfileFocused))
                        .focused($isNewProfileFocused)
                        .onSubmit { createProfile() }
                    
                    HStack(spacing: 12) {
                        Button("Cancel") { withAnimation { showCreateProfile = false } }
                            .buttonStyle(AlcoveButtonStyle(isPrimary: false))
                        
                        Button("Create") { createProfile() }
                            .buttonStyle(AlcoveButtonStyle(isPrimary: true))
                            .disabled(newProfileName.isEmpty)
                            .opacity(newProfileName.isEmpty ? 0.5 : 1)
                    }
                }
                .padding(24)
                .frame(width: 280)
                .background(
                    ZStack {
                        VisualEffectBlur(material: .hudWindow, blendingMode: .behindWindow, state: .active)
                        Color.black.opacity(0.5)
                    }
                )
                .clipShape(RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius))
                .overlay(
                    RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius)
                        .stroke(Color.white.opacity(0.1), lineWidth: 0.5)
                )
                .shadow(color: .black.opacity(0.3), radius: 30, x: 0, y: 15)
                .zIndex(201)
                .transition(.scale(scale: 0.95).combined(with: .opacity))
            }
            
            // MARK: - Modals (Add Snippet)
            if showAddStringSheet {
                Color.black.opacity(0.4)
                    .ignoresSafeArea()
                    .onTapGesture { withAnimation { showAddStringSheet = false } }
                    .zIndex(200)
                    .transition(.opacity)
                
                VStack(spacing: 20) {
                    VStack(spacing: 4) {
                        Text("Add Snippet")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white) // Forced White
                        Text("Paste or type content below")
                            .font(.system(size: 12))
                            .foregroundStyle(.white.opacity(0.7)) // Forced White
                    }
                    
                    TextEditor(text: $manualStringContent)
                        .font(.system(.body, design: .monospaced))
                        .scrollContentBackground(.hidden)
                        .padding(12)
                        .background(Color.white.opacity(0.05))
                        .clipShape(RoundedRectangle(cornerRadius: 12))
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .stroke(isAddStringFocused ? Color.white.opacity(0.3) : Color.white.opacity(0.1), lineWidth: 1)
                        )
                        .frame(height: 120)
                        .focused($isAddStringFocused)
                    
                    HStack(spacing: 12) {
                        Button("Cancel") { withAnimation { showAddStringSheet = false } }
                            .buttonStyle(AlcoveButtonStyle(isPrimary: false))
                        
                        Button("Add") { addString() }
                            .buttonStyle(AlcoveButtonStyle(isPrimary: true))
                            .disabled(manualStringContent.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty)
                            .opacity(manualStringContent.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty ? 0.5 : 1)
                    }
                }
                .padding(24)
                .frame(width: 300)
                .background(
                    ZStack {
                        VisualEffectBlur(material: .hudWindow, blendingMode: .behindWindow, state: .active)
                        Color.black.opacity(0.5)
                    }
                )
                .clipShape(RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius))
                .overlay(
                    RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius)
                        .stroke(Color.white.opacity(0.1), lineWidth: 0.5)
                )
                .shadow(color: .black.opacity(0.3), radius: 30, x: 0, y: 15)
                .zIndex(201)
                .transition(.scale(scale: 0.95).combined(with: .opacity))
            }

            // MARK: - Clear Recents Confirmation
            if showClearRecentsConfirmation {
                Color.black.opacity(0.4)
                    .ignoresSafeArea()
                    .onTapGesture { withAnimation { showClearRecentsConfirmation = false } }
                    .zIndex(250)
                    .transition(.opacity)
                
                VStack(spacing: 20) {
                    VStack(spacing: 6) {
                        Image(systemName: "trash.slash.fill")
                            .font(.system(size: 24))
                            .foregroundStyle(.red.opacity(0.9))
                            .padding(.bottom, 4)
                        
                        Text("Clear Recents?")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white)
                        
                        Text("This will remove all snippets from your history. This cannot be undone.")
                            .font(.system(size: 13))
                            .foregroundStyle(.white.opacity(0.7))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal, 4)
                    }
                    
                    HStack(spacing: 12) {
                        Button("Cancel") { withAnimation { showClearRecentsConfirmation = false } }
                            .buttonStyle(AlcoveButtonStyle(isPrimary: false))
                        
                        Button("Clear") {
                            withAnimation {
                                appState.clearRecents()
                                showClearRecentsConfirmation = false
                            }
                        }
                        .buttonStyle(AlcoveButtonStyle(isPrimary: true)) // Maybe make red? But primary gradient is fine for now
                    }
                }
                .padding(24)
                .frame(width: 280)
                .background(
                    ZStack {
                        VisualEffectBlur(material: .hudWindow, blendingMode: .behindWindow, state: .active)
                        Color.black.opacity(0.5)
                    }
                )
                .clipShape(RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius))
                .overlay(
                    RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius)
                        .stroke(Color.white.opacity(0.1), lineWidth: 0.5)
                )
                .shadow(color: .black.opacity(0.3), radius: 30, x: 0, y: 15)
                .zIndex(251)
                .transition(.scale(scale: 0.95).combined(with: .opacity))
            }
            
            // MARK: - Delete Confirmation Modal
            if showDeleteConfirmation, let folder = folderToDelete {
                Color.black.opacity(0.4)
                    .ignoresSafeArea()
                    .onTapGesture { withAnimation { showDeleteConfirmation = false } }
                    .zIndex(250) // Higher than everything else
                    .transition(.opacity)
                
                VStack(spacing: 20) {
                    VStack(spacing: 6) {
                        Image(systemName: "trash.fill")
                            .font(.system(size: 24))
                            .foregroundStyle(.red.opacity(0.9))
                            .padding(.bottom, 4)
                        
                        Text("Delete Profile?")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundStyle(.white)
                        
                        Text("Are you sure you want to delete \"\(folder.name)\"? This cannot be undone.")
                            .font(.system(size: 13))
                            .foregroundStyle(.white.opacity(0.7))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal, 4)
                    }
                    
                    HStack(spacing: 12) {
                        Button("Cancel") { withAnimation { showDeleteConfirmation = false } }
                            .buttonStyle(AlcoveButtonStyle(isPrimary: false))
                        
                        Button("Delete") {
                            withAnimation {
                                appState.deleteFolder(at: folder.id)
                                showDeleteConfirmation = false
                                folderToDelete = nil
                            }
                        }
                        .buttonStyle(AlcoveButtonStyle(isPrimary: true))
                        // We could make a red destructive style, but let's stick to the theme for now or override manually
                    }
                }
                .padding(24)
                .frame(width: 280)
                .background(
                    ZStack {
                        VisualEffectBlur(material: .hudWindow, blendingMode: .behindWindow, state: .active)
                        Color.black.opacity(0.5)
                    }
                )
                .clipShape(RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius))
                .overlay(
                    RoundedRectangle(cornerRadius: AlcoveTheme.cornerRadius)
                        .stroke(Color.white.opacity(0.1), lineWidth: 0.5)
                )
                .shadow(color: .black.opacity(0.3), radius: 30, x: 0, y: 15)
                .zIndex(251)
                .transition(.scale(scale: 0.95).combined(with: .opacity))
            }
            
            if appState.showToast {
                VStack {
                    Spacer()
                    ToastView(message: appState.toastMessage)
                        .padding(.bottom, 30)
                }
                .zIndex(150)
            }
        }
        .frame(width: 340, height: 500) // Slightly larger for "Airy" feel
        // Hidden button for CMD+D shortcut to delete current profile
        .background(
            Button(action: {
                if let id = appState.selectedFolderId,
                   let folder = appState.folders.first(where: { $0.id == id }),
                   !folder.isSystemRecents {
                    // Trigger confirmation for CMD+D too
                    folderToDelete = folder
                    withAnimation { showDeleteConfirmation = true }
                }
            }) {
                EmptyView()
            }
            .keyboardShortcut("d", modifiers: .command)
            .opacity(0)
        )
        .background(Color.clear) // Window is transparent, relying on ZStack background
    }
    
    // MARK: - Helpers
    
    private var currentFolder: SnippetFolder? {
        appState.folders.first(where: { $0.id == appState.selectedFolderId })
    }
    
    private var currentFolderName: String {
        currentFolder?.name ?? "Select Profile"
    }
    
    private var isRecentsSelected: Bool {
        currentFolder?.isSystemRecents == true
    }
    
    private func createProfile() {
        if !newProfileName.isEmpty {
            appState.createFolder(name: newProfileName)
            newProfileName = ""
            withAnimation { showCreateProfile = false }
        }
    }
    
    private func addString() {
        if let id = appState.selectedFolderId, !manualStringContent.isEmpty {
            appState.addSnippetToFolder(folderId: id, text: manualStringContent)
            manualStringContent = ""
            withAnimation { showAddStringSheet = false }
        }
    }
}

// MARK: - Components

struct ProfileDropdownRow: View {
    let folder: SnippetFolder
    let isSelected: Bool
    let onSelect: () -> Void
    let onDelete: () -> Void
    
    @State private var offset: CGFloat = 0
    @State private var isHovering = false
    
    var body: some View {
        HStack(spacing: 0) {
            // Main Content
            HStack {
                Text(folder.name)
                    .font(.system(size: 13, weight: .medium, design: .rounded))
                    .foregroundStyle(isSelected ? .white : .white.opacity(0.6)) // Forced White
                
                Spacer()
                
                if isSelected {
                    Image(systemName: "checkmark")
                        .font(.system(size: 10, weight: .bold))
                        .foregroundStyle(AlcoveTheme.accentGradient)
                }
            }
            .padding(.vertical, 8)
            .padding(.horizontal, 10)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isSelected ? Color.white.opacity(0.1) : (isHovering ? Color.white.opacity(0.05) : Color.clear))
            )
            .contentShape(Rectangle())
            .frame(maxWidth: .infinity)
            .onTapGesture {
                if offset < -10 {
                    withAnimation(.spring()) { offset = 0 }
                } else {
                    onSelect()
                }
            }
            
            // Delete Button
            if !folder.isSystemRecents {
                Button(action: {
                    withAnimation {
                        onDelete()
                    }
                }) {
                    Image(systemName: "trash.fill")
                        .font(.system(size: 12))
                        .foregroundStyle(.white)
                        .frame(width: 40, height: 32)
                        .background(
                            LinearGradient(colors: [.red.opacity(0.8), .red], startPoint: .top, endPoint: .bottom)
                        )
                        .cornerRadius(8)
                }
                .buttonStyle(.plain)
                .padding(.leading, 4)
            }
        }
        .offset(x: offset)
        .padding(.trailing, -44)
        .gesture(
            DragGesture(minimumDistance: 15, coordinateSpace: .local)
                .onChanged { value in
                    if !folder.isSystemRecents {
                        if value.translation.width < 0 {
                            self.offset = max(value.translation.width, -44)
                        } else if value.translation.width > 0 && self.offset < 0 {
                            self.offset = min(self.offset + value.translation.width, 0)
                        }
                    }
                }
                .onEnded { value in
                    if !folder.isSystemRecents {
                        if self.offset < -22 {
                            withAnimation(.spring()) {
                                self.offset = -44
                            }
                        } else {
                            withAnimation(.spring()) {
                                self.offset = 0
                            }
                        }
                    }
                }
        )
        .onHover { hover in
            withAnimation(.easeInOut(duration: 0.1)) {
                isHovering = hover
            }
        }
        .clipped()
    }
}

struct HoverButtonStyle: ButtonStyle {
    var shape: ButtonShape = .capsule
    
    enum ButtonShape {
        case capsule
        case circle
    }
    
    @State private var isHovering = false
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.95 : 1.0)
            .brightness(isHovering ? 0.2 : 0)
            .onHover { hover in
                withAnimation(.easeInOut(duration: 0.2)) {
                    isHovering = hover
                }
            }
    }
}

struct HoverListButtonStyle: ButtonStyle {
    @State private var isHovering = false
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .fill(isHovering ? Color.white.opacity(0.05) : Color.clear)
            )
            .scaleEffect(configuration.isPressed ? 0.98 : 1.0)
            .onHover { hover in
                withAnimation(.easeInOut(duration: 0.2)) {
                    isHovering = hover
                }
            }
    }
}

// Reuse settings view but style it slightly
struct GlassySettingsView: View {
    @Binding var isPresented: Bool
    @ObservedObject var appState: AppState // Pass AppState down
    
    @AppStorage("playAnimation") var playAnimation: Bool = true
    @AppStorage("maxRecents") var maxRecents: Int = 10
    @AppStorage("startAtLogin") var startAtLogin: Bool = false
    
    var body: some View {
        VStack(spacing: 0) {
            // Header
            HStack {
                Button(action: {
                    withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                        isPresented = false
                    }
                }) {
                    HStack(spacing: 4) {
                        Image(systemName: "chevron.left")
                            .font(.system(size: 12, weight: .bold))
                        Text("Back")
                            .font(.system(size: 14, weight: .medium))
                    }
                    .foregroundStyle(.white.opacity(0.6))
                    .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
                
                Spacer()
                
                Text("Settings")
                    .font(.headline)
                    .foregroundStyle(.white)
                
                Spacer()
                
                Text("Back").hidden()
            }
            .padding()
            .background(Color.white.opacity(0.02))
            
            // Content
            ScrollView {
                VStack(spacing: 24) {
                    // General Section
                    VStack(alignment: .leading, spacing: 12) {
                        Text("General")
                            .font(.caption)
                            .foregroundStyle(.white.opacity(0.6)) // Forced White
                            .textCase(.uppercase)
                            .tracking(1)
                        
                        ToggleRow(title: "Start at Login", isOn: $startAtLogin)
                        ToggleRow(title: "Play Animations", isOn: $playAnimation)
                    }
                    .padding(16)
                    .background(
                        RoundedRectangle(cornerRadius: 16)
                            .fill(Color.white.opacity(0.03))
                            .stroke(Color.white.opacity(0.05), lineWidth: 1)
                    )
                    
                    // History Section
                    VStack(alignment: .leading, spacing: 12) {
                        Text("History")
                            .font(.caption)
                            .foregroundStyle(.white.opacity(0.6)) // Forced White
                            .textCase(.uppercase)
                            .tracking(1)
                        
                        HStack {
                            Text("History Size")
                                .font(.system(size: 14))
                                .foregroundStyle(.white) // Forced White
                            Spacer()
                            Text("10")
                                .font(.system(size: 14, weight: .bold, design: .monospaced))
                                .foregroundStyle(.white.opacity(0.6)) // Forced White
                        }
                    }
                    .padding(16)
                    .background(
                        RoundedRectangle(cornerRadius: 16)
                            .fill(Color.white.opacity(0.03))
                            .stroke(Color.white.opacity(0.05), lineWidth: 1)
                    )
                    
                    // Help Section
                    VStack(alignment: .leading, spacing: 12) {
                        Text("Help & Shortcuts")
                            .font(.caption)
                            .foregroundStyle(.white.opacity(0.6))
                            .textCase(.uppercase)
                            .tracking(1)
                        
                        VStack(alignment: .leading, spacing: 8) {
                            HelpRow(icon: "clock", text: "Recents update automatically")
                            HelpRow(icon: "keyboard", text: "Cmd+Option+1...0 to copy and paste")
                            HelpRow(icon: "folder.badge.plus", text: "Create a clipboard profile for specific tasks")
                            HelpRow(icon: "trash", text: "Swipe left or Cmd+D to delete profile")
                            HelpRow(icon: "eye.slash", text: "Right-click to obscure text")
                        }
                    }
                    .padding(16)
                    .background(
                        RoundedRectangle(cornerRadius: 16)
                            .fill(Color.white.opacity(0.03))
                            .stroke(Color.white.opacity(0.05), lineWidth: 1)
                    )
                    
                    // About
                    VStack(spacing: 4) {
                        Text("Pastry 1.0")
                            .font(.caption)
                            .foregroundStyle(.white.opacity(0.6)) // Forced White
                        Text("Made with 🥐")
                            .font(.caption2)
                            .foregroundStyle(.white.opacity(0.4)) // Forced White
                        
                        HStack(spacing: 12) {
                            Link(destination: URL(string: "https://pastryfeedback.github.io/privacy.html")!) {
                                Text("Privacy Policy")
                                    .font(.caption2)
                                    .foregroundStyle(.white.opacity(0.6))
                                    .underline()
                            }
                            .buttonStyle(.plain)
                            
                            Link(destination: URL(string: "https://pastryfeedback.github.io/terms.html")!) {
                                Text("Terms of Service")
                                    .font(.caption2)
                                    .foregroundStyle(.white.opacity(0.6))
                                    .underline()
                            }
                            .buttonStyle(.plain)
                        }
                        .padding(.top, 4)
                    }
                    .padding(.top, 10)
                    
                    // Quit Button
                    Button(action: {
                        appState.quitApp()
                    }) {
                        Text("Quit Pastry")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(.red.opacity(0.9))
                            .padding(.vertical, 8)
                            .padding(.horizontal, 16)
                            .background(Color.white.opacity(0.05))
                            .clipShape(Capsule())
                    }
                    .buttonStyle(HoverButtonStyle())
                    .padding(.bottom, 20)
                }
                .padding()
            }
        }
        .background(Color.clear) // Rely on parent ZStack
    }
}

struct ToggleRow: View {
    let title: String
    @Binding var isOn: Bool
    
    var body: some View {
        HStack {
            Text(title)
                .font(.system(size: 14))
                .foregroundStyle(.white) // Forced White
            Spacer()
            Toggle("", isOn: $isOn)
                .labelsHidden()
                .toggleStyle(.switch)
        }
    }
}

struct HelpRow: View {
    let icon: String
    let text: String
    
    var body: some View {
        HStack(spacing: 10) {
            Image(systemName: icon)
                .font(.system(size: 12))
                .foregroundStyle(.white.opacity(0.6))
                .frame(width: 20)
            
            Text(text)
                .font(.system(size: 13))
                .foregroundStyle(.white.opacity(0.8))
            
            Spacer()
        }
    }
}

struct EmptyStateView: View {
    let isRecents: Bool
    
    var body: some View {
        VStack(spacing: 12) {
            Image(systemName: isRecents ? "clock" : "doc.text")
                .font(.system(size: 32))
                .foregroundStyle(AlcoveTheme.accentGradient)
                .opacity(0.5)
            
            Text(isRecents ? "No recent clips" : "No snippets yet")
                .font(.callout)
                .foregroundStyle(.secondary)
            
            if !isRecents {
                Text("Click + to add one")
                    .font(.caption)
                    .foregroundStyle(.tertiary)
            }
        }
        .frame(maxWidth: .infinity)
        .padding(.top, 60)
    }
}
