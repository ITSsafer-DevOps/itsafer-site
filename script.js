// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initEmailContact();
    initSmoothScroll();
    initProjectCardAnimations();
});

// Email contact copy functionality
function initEmailContact() {
    const emailLink = document.getElementById('email-contact');
    if (!emailLink) return;
    
    emailLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        copyEmailToClipboard();
    });
}

function copyEmailToClipboard() {
    const email = 'itssafer@itssafer.org';
    
    // Try modern clipboard API first
    if (navigator && navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email)
            .then(() => showEmailPopup(email))
            .catch(() => fallbackCopyEmail(email));
    } else {
        // Fallback for older browsers or non-secure context
        fallbackCopyEmail(email);
    }
}

function fallbackCopyEmail(email) {
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showEmailPopup(email);
    } catch (err) {
        console.error('Copy failed:', err);
        alert('Email: ' + email + '\n\nPlease copy manually.');
    }
    
    document.body.removeChild(textArea);
}

function showEmailPopup(email) {
    let popup = document.getElementById('email-popup');
    
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'email-popup';
        popup.className = 'email-popup';
        document.body.appendChild(popup);
    }
    
    popup.innerHTML = `
        <div class="email-popup-content">
            <p>✓ Email copied!</p>
            <code>${email}</code>
        </div>
    `;
    
    popup.classList.add('show');
    
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]:not(#email-contact)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Project card animations
function initProjectCardAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
    
    // Add fade-in animation
    if (!document.querySelector('style[data-animation]')) {
        const style = document.createElement('style');
        style.setAttribute('data-animation', 'true');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
