// Email copy functionality
const emailContact = document.getElementById('email-contact');
if (emailContact) {
    emailContact.addEventListener('click', function (e) {
        e.preventDefault();
        const email = 'itssafer@itssafer.org';
        
        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show popup
            let popup = document.getElementById('email-popup');
            if (!popup) {
                popup = document.createElement('div');
                popup.id = 'email-popup';
                popup.className = 'email-popup';
                popup.innerHTML = `
                    <div class="email-popup-content">
                        <p>Email copied to clipboard!</p>
                        <code>${email}</code>
                    </div>
                `;
                document.body.appendChild(popup);
            }
            popup.classList.add('show');
            
            // Hide popup after 3 seconds
            setTimeout(() => {
                popup.classList.remove('show');
            }, 3000);
        }).catch(() => {
            alert('Failed to copy email');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]:not(#email-contact)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation to project cards on scroll
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
const style = document.createElement('style');
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

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}