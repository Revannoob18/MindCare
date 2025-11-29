// ============================================
// MAIN JAVASCRIPT FOR MINDCARE WEBSITE
// ============================================

// DOM Elements
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const pageTransition = document.getElementById('pageTransition');

// ============================================
// PAGE TRANSITION
// ============================================
function initPageTransition() {
    // Hide transition on page load
    if (pageTransition) {
        setTimeout(() => {
            pageTransition.classList.remove('active');
        }, 300);
    }
    
    // Add transition to all internal links
    document.querySelectorAll('a[href]:not([href^="#"]):not([target="_blank"])').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal link
            if (href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
                e.preventDefault();
                
                // Show transition
                if (pageTransition) {
                    pageTransition.classList.add('active');
                }
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
}

// ============================================
// THEME TOGGLE (Dark/Light Mode)
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add rotation animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
let navbarVisible = true;
let navbarTimeout = null;

function showNavbar() {
    if (!navbarVisible) {
        navbar.style.transform = 'translateY(0)';
        navbarVisible = true;
    }
    if (navbarTimeout) clearTimeout(navbarTimeout);
    // Hide again after 3s jika tidak di klik/touch (hanya di desktop)
    if (window.innerWidth > 768) {
        navbarTimeout = setTimeout(hideNavbar, 3000);
    }
}

function hideNavbar() {
    if (navbarVisible) {
        navbar.style.transform = 'translateY(-100%)';
        navbarVisible = false;
    }
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (navbar) {
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        // Show navbar saat scroll (hanya di desktop)
        if (window.innerWidth > 768) {
            showNavbar();
        }
    }
    lastScroll = currentScroll;
});

// Show navbar saat klik/touch
navbar.addEventListener('mouseenter', showNavbar);
navbar.addEventListener('touchstart', showNavbar);
navbar.addEventListener('click', showNavbar);
// Hide navbar saat mouse leave
navbar.addEventListener('mouseleave', hideNavbar);

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuOverlay = document.createElement('div');
menuOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
`;
document.body.appendChild(menuOverlay);

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            menuOverlay.style.opacity = '1';
            menuOverlay.style.pointerEvents = 'all';
            document.body.style.overflow = 'hidden';
        } else {
            menuOverlay.style.opacity = '0';
            menuOverlay.style.pointerEvents = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on overlay
    menuOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        menuOverlay.style.opacity = '0';
        menuOverlay.style.pointerEvents = 'none';
        document.body.style.overflow = '';
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            menuOverlay.style.opacity = '0';
            menuOverlay.style.pointerEvents = 'none';
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            menuOverlay.style.opacity = '0';
            menuOverlay.style.pointerEvents = 'none';
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with slide-up class
document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
});

// ============================================
// TESTIMONIAL SLIDER
// ============================================
const initTestimonialSlider = () => {
    const slider = document.getElementById('testimonialSlider');
    if (!slider) return;
    
    const track = slider.querySelector('.testimonial-track');
    const cards = slider.querySelectorAll('.testimonial-card');
    const dotsContainer = slider.querySelector('.slider-dots');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    
    if (!track || cards.length === 0) return;
    
    let currentIndex = 0;
    
    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 32; // 32px gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Auto-play slider
    let autoplayInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
};

// ============================================
// FORM VALIDATION
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.color = 'var(--danger-color)';
    errorElement.style.fontSize = '14px';
    errorElement.style.marginTop = '4px';
    input.style.borderColor = 'var(--danger-color)';
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    input.style.borderColor = '';
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 24px;
            background: ${type === 'success' ? 'var(--success-color)' : 'var(--danger-color)'};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            min-width: 300px;
        ">
            <div style="display: flex; align-items: center; gap: 12px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${type === 'success' 
                        ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' 
                        : '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'}
                </svg>
                <span>${message}</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// LOCAL STORAGE HELPERS
// ============================================
const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

// ============================================
// LAZY LOADING IMAGES
// ============================================
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ============================================
// COPY TO CLIPBOARD
// ============================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Teks berhasil disalin!', 'success');
    }).catch(() => {
        showNotification('Gagal menyalin teks', 'error');
    });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const createScrollToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"/>
        </svg>
    `;
    button.style.cssText = `
        position: fixed;
        bottom: 180px;
        right: 24px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        z-index: 998;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.pointerEvents = 'all';
        } else {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        }
    });
    
    document.body.appendChild(button);
};

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initPageTransition();
    initTestimonialSlider();
    createScrollToTop();
    updateActiveNavLink();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🧠 MindCare Website Initialized Successfully!');
});

// ============================================
// PREVENT FORMS FROM SUBMITTING (Demo Mode)
// ============================================
document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.tagName === 'FORM' && !form.hasAttribute('data-real-submit')) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form Data:', data);
        showNotification('Data berhasil dikirim! (Demo Mode)', 'success');
        
        // Reset form after 1 second
        setTimeout(() => form.reset(), 1000);
    }
});

// ============================================
// EXPORT FUNCTIONS FOR OTHER SCRIPTS
// ============================================
window.MindCare = {
    showNotification,
    validateEmail,
    validatePhone,
    showError,
    clearError,
    Storage,
    copyToClipboard
};
