import SwiftUI
import ServiceManagement

struct SettingsView: View {
    @AppStorage("playAnimation") var playAnimation: Bool = true
    @AppStorage("maxRecents") var maxRecents: Int = 10
    
    @State private var startAtLogin: Bool = false
    
    var body: some View {
        Form {
            Section {
                Toggle("Start Pastry at login", isOn: $startAtLogin)
                    .help("Launch the app automatically when you log in")
                    .onChange(of: startAtLogin) { _, newValue in
                        updateLoginItem(enabled: newValue)
                    }
                
                Toggle("Play animation on copy", isOn: $playAnimation)
            }
            
            Section {
                Stepper("Max Recents: \(maxRecents)", value: $maxRecents, in: 5...50)
            }
        }
        .padding()
        .frame(width: 350, height: 200)
        .onAppear {
            startAtLogin = SMAppService.mainApp.status == .enabled
        }
    }
    
    private func updateLoginItem(enabled: Bool) {
        do {
            if enabled {
                if SMAppService.mainApp.status != .enabled {
                    try SMAppService.mainApp.register()
                }
            } else {
                if SMAppService.mainApp.status == .enabled {
                    try SMAppService.mainApp.unregister()
                }
            }
        } catch {
            print("Failed to update login item: \(error)")
        }
    }
}
