import Foundation

struct Snippet: Identifiable, Codable, Equatable {
    let id: UUID
    var text: String
    var createdAt: Date
    var isSensitive: Bool = false
    
    enum CodingKeys: String, CodingKey {
        case id, text, createdAt, isSensitive
    }
    
    init(id: UUID, text: String, createdAt: Date, isSensitive: Bool = false) {
        self.id = id
        self.text = text
        self.createdAt = createdAt
        self.isSensitive = isSensitive
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        id = try container.decode(UUID.self, forKey: .id)
        text = try container.decode(String.self, forKey: .text)
        createdAt = try container.decode(Date.self, forKey: .createdAt)
        // Handle missing key for backward compatibility
        isSensitive = try container.decodeIfPresent(Bool.self, forKey: .isSensitive) ?? false
    }
}
