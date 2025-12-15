import Foundation

actor PersistenceManager {
    private let fileURL: URL
    
    init(storeName: String = "pastery_data.json") {
        let paths = FileManager.default.urls(for: .applicationSupportDirectory, in: .userDomainMask)
        let dir = paths[0].appendingPathComponent("Paste-ry")
        // Ensure directory exists
        try? FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        self.fileURL = dir.appendingPathComponent(storeName)
    }
    
    func saveFolders(_ folders: [SnippetFolder]) throws {
        let data = try JSONEncoder().encode(folders)
        try data.write(to: fileURL)
    }
    
    func loadFolders() -> [SnippetFolder] {
        guard FileManager.default.fileExists(atPath: fileURL.path) else { return [] }
        
        do {
            let data = try Data(contentsOf: fileURL)
            let folders = try JSONDecoder().decode([SnippetFolder].self, from: data)
            return folders
        } catch {
            print("Failed to load data: \(error)")
            return []
        }
    }
}

