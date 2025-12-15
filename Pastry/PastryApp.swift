import SwiftUI

@main
struct Paste_ryApp: App {
    var body: some Scene {
        MenuBarExtra {
            ContentView()
        } label: {
            Image("MenuBarIcon")
                .resizable()
                .renderingMode(.original)
                .aspectRatio(contentMode: .fit)
        }
        .menuBarExtraStyle(.window)
        
        Settings {
            SettingsView()
        }
    }
}
