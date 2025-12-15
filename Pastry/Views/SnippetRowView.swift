import SwiftUI

struct SnippetRowView: View {
    let snippet: Snippet
    let index: Int
    let action: () -> Void
    
    @State private var isHovering = false
    @State private var isClicking = false
    
    // For invisible ink effect
    @State private var noiseOffset: CGFloat = 0
    
    var body: some View {
        Button(action: {
            if snippet.isSensitive && !isHovering {
                // If sensitive and somehow clicked without hovering (keyboard?), maybe briefly reveal?
                // But usually hover handles reveal.
            }
            triggerAnimation()
            action()
        }) {
            HStack(spacing: 12) {
                // Hotkey Indicator
                if index <= 10 {
                    HStack(spacing: 1) {
                        Image(systemName: "command")
                        Image(systemName: "option")
                        Text("\(index == 10 ? 0 : index)")
                    }
                    .font(.system(size: 8, weight: .bold))
                    .foregroundStyle(.white.opacity(0.4))
                    .opacity(isHovering ? 1 : 0.6)
                    .frame(width: 34, alignment: .leading)
                } else {
                    Spacer().frame(width: 34)
                }
                
                // Content
                ZStack(alignment: .leading) {
                    Text(snippet.text)
                        .lineLimit(1)
                        .font(.system(size: 13, weight: .regular, design: .default))
                        .foregroundStyle(.white.opacity(0.9))
                        .truncationMode(.middle)
                        .blur(radius: (snippet.isSensitive && !isHovering) ? 6 : 0)
                        .animation(.easeInOut(duration: 0.2), value: isHovering)
                    
                    // Invisible Ink Overlay
                    if snippet.isSensitive {
                        InvisibleInkOverlay()
                            .opacity(isHovering ? 0 : 1)
                            .animation(.easeInOut(duration: 0.3), value: isHovering)
                            .allowsHitTesting(false)
                    }
                }
                
                Spacer()
                
                if isHovering {
                    Text(timeAgo(snippet.createdAt))
                        .font(.system(size: 10, weight: .medium, design: .rounded))
                        .foregroundStyle(.white.opacity(0.6))
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(Color.white.opacity(0.1))
                        .clipShape(Capsule())
                        .transition(.opacity)
                }
            }
            .padding(.vertical, 9)
            .padding(.horizontal, 12)
            .background(
                RoundedRectangle(cornerRadius: 10)
                    .fill(isHovering ? Color.primary.opacity(0.04) : Color.clear)
            )
            .scaleEffect(isClicking ? 0.98 : 1.0)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .onHover { hover in
            withAnimation(.easeInOut(duration: 0.2)) {
                isHovering = hover
            }
        }
    }
    
    private func triggerAnimation() {
        withAnimation(.spring(response: 0.2, dampingFraction: 0.6)) {
            isClicking = true
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
            withAnimation {
                isClicking = false
            }
        }
    }
    
    private func timeAgo(_ date: Date) -> String {
        let formatter = RelativeDateTimeFormatter()
        formatter.unitsStyle = .short
        return formatter.localizedString(for: date, relativeTo: Date())
    }
}

// A simple particle-like noise view to simulate invisible ink
struct InvisibleInkOverlay: View {
    var body: some View {
        TimelineView(.animation) { timeline in
            let time = timeline.date.timeIntervalSinceReferenceDate
            
            Canvas { context, size in
                let width = size.width
                let height = size.height
                
                // Density based on width to cover the text line
                let particleCount = Int(width * 2.0)
                
                for i in 0..<particleCount {
                    let iFloat = Double(i)
                    
                    // Pseudo-random stability based on index
                    let seed = iFloat * 997.0
                    
                    // Initial positions scattered
                    let baseX = (iFloat * 7.13 + seed).truncatingRemainder(dividingBy: width)
                    let baseY = (iFloat * 13.7 + seed).truncatingRemainder(dividingBy: height)
                    
                    // Smooth motion
                    // X flows slowly, Y oscillates
                    let xOffset = sin(time * 0.2 + iFloat * 0.05) * 5.0 + (time * 5.0)
                    let yOffset = cos(time * 0.5 + iFloat * 0.1) * 2.0
                    
                    var x = (baseX + xOffset).truncatingRemainder(dividingBy: width)
                    var y = (baseY + yOffset).truncatingRemainder(dividingBy: height)
                    
                    // Wrap handling
                    if x < 0 { x += width }
                    if y < 0 { y += height }
                    
                    // Shimmering size and opacity
                    let shimmer = sin(time * 3.0 + iFloat * 0.2)
                    let pSize = 1.5 + shimmer * 0.5
                    let opacity = 0.4 + shimmer * 0.3
                    
                    let rect = CGRect(x: x, y: y, width: pSize, height: pSize)
                    context.opacity = opacity
                    context.fill(Path(ellipseIn: rect), with: .color(.white))
                }
            }
        }
        .mask(
            LinearGradient(
                colors: [.black, .black.opacity(0.5)],
                startPoint: .leading,
                endPoint: .trailing
            )
        )
    }
}
