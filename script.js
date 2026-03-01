// AOS (Animate on Scroll) Initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 80
});

// ========== HEADER SCROLL EFFECT ==========
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// ========== SCROLL TO TOP BUTTON ==========
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== TYPING ANIMATION (INDEX PAGE ONLY) ==========
const typingElement = document.getElementById('typing-text');
if (typingElement) {
    const phrases = [
        "Professional Construction Services",
        "Architectural & Structural Experts",
        "Building Dreams Across South Sudan",
        "Quality. Durability. Excellence."
    ];
    let i = 0, j = 0, isDeleting = false;

    function type() {
        const currentPhrase = phrases[i];
        if (!isDeleting && j <= currentPhrase.length) {
            typingElement.textContent = currentPhrase.substring(0, j);
            j++;
            setTimeout(type, 100);
        } else if (isDeleting && j > 0) {
            typingElement.textContent = currentPhrase.substring(0, j - 1);
            j--;
            setTimeout(type, 60);
        } else {
            if (!isDeleting && j === currentPhrase.length + 1) {
                isDeleting = true;
                setTimeout(type, 1500);
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % phrases.length;
                setTimeout(type, 300);
            }
        }
    }
    type();
}

// ========== LIGHTBOX (GALLERY PAGE) ==========
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('closeLightbox');

if (lightbox) {
    // Open lightbox on gallery item click
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent scrolling
        });
    });

    // Close lightbox
    const closeLightboxHandler = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeLightbox.addEventListener('click', closeLightboxHandler);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightboxHandler();
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightboxHandler();
        }
    });
}

// ========== CONTACT FORM SUBMISSION (DEMO) ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out. We will contact you shortly.');
        contactForm.reset(); // optional
    });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS (OPTIONAL) ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== ACTIVE NAVIGATION HIGHLIGHT (BASED ON CURRENT PAGE) ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
