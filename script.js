document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3D Tilt Effect for Hero Visual
    const heroVisual = document.querySelector('.hero-visual');
    const appWindow = document.querySelector('.mockup-window.app-window');
    const helpPanel = document.querySelector('.mockup-window.help-panel');

    if (heroVisual && appWindow) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            // Calculate mouse position relative to center (0 to 1)
            const xPos = (clientX / innerWidth - 0.5);
            const yPos = (clientY / innerHeight - 0.5);
            
            // Apply rotation (max 10 degrees)
            const rotateY = xPos * 10; 
            const rotateX = 5 - (yPos * 10); // Base rotation 5deg

            // Apply to app window
            appWindow.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            // Apply parallax to help panel if it exists
            if (helpPanel) {
                // Help panel has its own base transform in CSS, we need to respect it or calculate relative
                // Simpler to just apply a slight translate offset
                helpPanel.style.transform = `rotateZ(2deg) translate(${xPos * 20}px, ${yPos * 20}px)`;
            }
        });
        
        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            appWindow.style.transform = 'translate(-50%, -50%) rotateX(5deg) rotateY(0deg)';
            if (helpPanel) {
                helpPanel.style.transform = 'rotateZ(2deg)';
            }
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in animation to feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s, background 0.3s`;
        observer.observe(card);
    });

    // Invisible Ink Particle Effect
    initInvisibleInk();
});

function initInvisibleInk() {
    const containers = document.querySelectorAll('.invisible-ink');
    
    containers.forEach(container => {
        const width = parseInt(container.getAttribute('data-width')) || 150;
        const height = 20; // Height of the text line
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 40; // Number of particles per canvas
        
        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5, // Slow horizontal velocity
                offset: Math.random() * Math.PI * 2, // Phase offset for sine wave
                speed: 0.02 + Math.random() * 0.04, // Speed of oscillation
                radius: 1 + Math.random() * 1.5,
                alpha: 0.3 + Math.random() * 0.5
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                // Update position with sine/cosine
                p.offset += p.speed;
                
                // Horizontal movement with wrap-around
                p.x += p.vx;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                
                // Vertical oscillation
                const yOscillation = Math.sin(p.offset) * 2;
                const currentY = p.y + yOscillation;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, currentY, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`; // White particles
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    });
}
