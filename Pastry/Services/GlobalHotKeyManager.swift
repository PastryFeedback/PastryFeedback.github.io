import Cocoa
import Carbon

// A wrapper around Carbon's RegisterEventHotKey to handle global shortcuts.
// This allows Paste-ry to detect hotkeys even when it's not the active application.

protocol GlobalHotKeyManagerDelegate: AnyObject {
    func hotKeyTriggered(id: UInt32)
}

class GlobalHotKeyManager {
    weak var delegate: GlobalHotKeyManagerDelegate?
    private var eventHandler: EventHandlerRef?
    private var hotKeyRefs: [UInt32: EventHotKeyRef] = [:]
    
    // Command Key bit (cmdKey) is 1 << 8 = 256
    // Option Key bit (optionKey) is 1 << 11 = 2048
    // Control Key bit (controlKey) is 1 << 12 = 4096
    // Shift Key bit (shiftKey) is 1 << 9 = 512
    
    init() {
        installEventHandler()
    }
    
    deinit {
        // Cleanup hotkeys
        for (_, ref) in hotKeyRefs {
            UnregisterEventHotKey(ref)
        }
        if let handler = eventHandler {
            RemoveEventHandler(handler)
        }
    }
    
    private func installEventHandler() {
        var eventType = EventTypeSpec(eventClass: OSType(kEventClassKeyboard), eventKind: OSType(kEventHotKeyPressed))
        
        let selfPointer = Unmanaged.passUnretained(self).toOpaque()
        
        InstallEventHandler(GetEventMonitorTarget(), { (_, event, userData) -> OSStatus in
            guard let userData = userData else { return noErr }
            let manager = Unmanaged<GlobalHotKeyManager>.fromOpaque(userData).takeUnretainedValue()
            
            var hotKeyID = EventHotKeyID()
            GetEventParameter(event, EventParamName(kEventParamDirectObject), EventParamType(typeEventHotKeyID), nil, MemoryLayout<EventHotKeyID>.size, nil, &hotKeyID)
            
            DispatchQueue.main.async {
                manager.delegate?.hotKeyTriggered(id: hotKeyID.id)
            }
            
            return noErr
        }, 1, &eventType, selfPointer, &eventHandler)
    }
    
    func registerHotKey(id: UInt32, keyCode: UInt32, modifiers: UInt32) {
        // Unregister if exists
        if let ref = hotKeyRefs[id] {
            UnregisterEventHotKey(ref)
            hotKeyRefs.removeValue(forKey: id)
        }
        
        var hotKeyID = EventHotKeyID(signature: OSType(0x50535452), id: id) // PSTR signature
        var hotKeyRef: EventHotKeyRef?
        
        let status = RegisterEventHotKey(keyCode, modifiers, hotKeyID, GetEventMonitorTarget(), 0, &hotKeyRef)
        
        if status == noErr, let ref = hotKeyRef {
            hotKeyRefs[id] = ref
        } else {
            print("Failed to register hotkey with id: \(id), status: \(status)")
        }
    }
    
    func unregisterAll() {
        for (_, ref) in hotKeyRefs {
            UnregisterEventHotKey(ref)
        }
        hotKeyRefs.removeAll()
    }
}

// Key Codes (ANSI standard)
// 1 = 18, 2 = 19, 3 = 20, 4 = 21, 5 = 23, 6 = 22, 7 = 26, 8 = 28, 9 = 25, 0 = 29
// P = 35

