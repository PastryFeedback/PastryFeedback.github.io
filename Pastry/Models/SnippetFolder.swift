import Foundation

struct SnippetFolder: Identifiable, Codable, Equatable {
    let id: UUID
    var name: String
    var isSystemRecents: Bool
    var snippets: [Snippet]
}

