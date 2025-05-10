// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Toggle beverage ingredients
document.querySelectorAll('.ingredient-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const ingredients = btn.nextElementSibling;
        ingredients.classList.toggle('show');
        
        const icon = btn.querySelector('i');
        if (ingredients.classList.contains('show')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.background = color;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add CSS for particles
    const style = document.createElement('style');
    style.textContent = `
        .particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.6;
            animation: floatParticle infinite ease-in-out;
            z-index: -1;
        }
        
        @keyframes floatParticle {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -20px) rotate(10deg); }
            50% { transform: translate(0, -40px) rotate(0deg); }
            75% { transform: translate(-20px, -20px) rotate(-10deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements when scrolling
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .section-title, .beverage-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
document.querySelectorAll('.card, .section-title, .beverage-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Run once on page load
window.addEventListener('load', () => {
    animateOnScroll();
});