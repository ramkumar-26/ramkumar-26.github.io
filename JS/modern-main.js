// ===================================
// Modern Portfolio - JavaScript
// GitHub Pages Compatible
// ===================================

// Initialize AOS (Animate On Scroll)
// Optimize for mobile performance
AOS.init({
    duration: window.innerWidth <= 768 ? 600 : 1000, // Faster on mobile
    once: true, // Animate only once to improve performance
    offset: window.innerWidth <= 768 ? 50 : 100, // Smaller offset on mobile
    easing: 'ease-in-out',
    disable: false, // Can set to 'mobile' to completely disable on mobile
    throttleDelay: 99 // Throttle scroll events
});

// ===================================
// Particles.js Configuration
// ===================================

// Detect if mobile device
const isMobile = window.innerWidth <= 768;

particlesJS('particles-js', {
    particles: {
        number: {
            value: isMobile ? 30 : 80, // Reduce particles on mobile
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#667eea'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: isMobile ? 0.3 : 0.5, // Lower opacity on mobile
            random: false,
            anim: {
                enable: !isMobile, // Disable animation on mobile
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: !isMobile, // Disable animation on mobile
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: !isMobile, // Disable lines on mobile for better performance
            distance: 150,
            color: '#667eea',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: isMobile ? 1 : 2, // Slower on mobile
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: !isMobile, // Disable hover on mobile
                mode: 'repulse'
            },
            onclick: {
                enable: !isMobile, // Disable click on mobile
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ===================================
// Navigation
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===================================
// Theme Toggle
// ===================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
}

// Theme toggle event listener
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        
        // Change icon
        if (body.classList.contains('light-theme')) {
            themeIcon.classList.remove('bx-moon');
            themeIcon.classList.add('bx-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.remove('bx-sun');
            themeIcon.classList.add('bx-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ===================================
// Typewriter Effect
// ===================================
const typewriter = document.getElementById('typewriter');
if (typewriter) {
    const texts = [
        'Senior Backend Engineer',
        'Microservices Architect',
        'Java & Spring Boot Expert',
        'Node.js Developer',
        'Cloud Enthusiast'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before starting new text
        }

        setTimeout(type, typingSpeed);
    }

    // Start typewriter effect
    setTimeout(type, 1000);
}

// ===================================
// Counter Animation (Stats)
// ===================================
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});

// ===================================
// Skill Bars Animation
// ===================================
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skill-bar');
            const level = skillBar.getAttribute('data-level');
            skillBar.style.width = level + '%';
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillCards.forEach(card => {
    skillObserver.observe(card);
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// EmailJS Configuration
// ===================================
(function() {
    emailjs.init("1aQehdl_p9GiCwBVY");
})();

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoader = document.getElementById('btn-loader');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        submitBtn.disabled = true;
        formMessage.textContent = '';
        
        // Get form data
        const formData = {
            from_name: document.getElementById('from_name').value,
            from_email: document.getElementById('from_email').value,
            message: document.getElementById('message').value
        };
        
        // Send notification email to you
        emailjs.send('service_kqzgx7j', 'template_contact', formData)
            .then(function(response) {
                console.log('Notification sent!', response.status);
                
                // Send auto-reply email to sender
                return emailjs.send('service_kqzgx7j', 'template_autoreply', formData);
            })
            .then(function(response) {
                console.log('Auto-reply sent!', response.status);
                
                // Success - both emails sent
                formMessage.textContent = '✅ Message sent successfully! Check your email for confirmation.';
                formMessage.style.color = '#00FF88';
                
                // Reset form
                contactForm.reset();
                
                // Reset button state
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 5000);
            })
            .catch(function(error) {
                // Error
                console.log('FAILED...', error);
                formMessage.textContent = '❌ Failed to send message. Please try again or email me directly at ramkumar.ds26@gmail.com';
                formMessage.style.color = '#FF006E';
                
                // Reset button state
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            });
    });
}

// ===================================
// Scroll Reveal Animation
// ===================================
const revealElements = document.querySelectorAll('.timeline-item, .github-card, .contact-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    revealObserver.observe(element);
});

// ===================================
// Floating Cards Animation (Hero)
// ===================================
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
});

// ===================================
// Cursor Follow Effect (Optional)
// ===================================
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.glow-effect');
    if (glow) {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cLooking for a talented Backend Engineer?', 'font-size: 14px; color: #00F5FF;');
console.log('%cLet\'s connect: ramkumar.ds26@gmail.com', 'font-size: 14px; color: #00FF88;');
