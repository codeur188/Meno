import './bootstrap';
// ===========================
// CURSOR GLOW
// ===========================
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// ===========================
// SCROLL PROGRESS BAR
// ===========================
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

// ===========================
// SCROLL TO TOP BUTTON
// ===========================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.setAttribute('aria-label', 'Retour en haut');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// SCROLL EVENTS
// ===========================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Progress bar
    scrollProgress.style.width = progress + '%';

    // Header blur on scroll
    const header = document.querySelector('header');
    if (header) {
        if (scrollTop > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Scroll-to-top button
    if (scrollTop > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    // Trigger scroll animations
    triggerScrollAnimations();
});

// ===========================
// INTERSECTION OBSERVER – scroll-triggered cards
// ===========================
function triggerScrollAnimations() {
    // Feature cards stagger
    const featureCards = document.querySelectorAll('.feature-card:not(.visible)');
    featureCards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            setTimeout(() => {
                card.classList.add('visible');
                card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s`;
            }, i * 80);
        }
    });

    // About text
    const aboutText = document.querySelector('.about-text:not(.visible)');
    if (aboutText) {
        const rect = aboutText.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            aboutText.classList.add('visible');
        }
    }

    // Info cards stagger
    const infoCards = document.querySelectorAll('.info-card:not(.visible)');
    infoCards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
            setTimeout(() => {
                card.classList.add('visible');
                card.style.transition = `opacity 0.45s ease ${i * 0.1}s, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s`;
            }, i * 100);
        }
    });
}

// ===========================
// PAGE NAVIGATION
// ===========================
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');

        // Reset scroll-triggered classes so they re-animate
        targetPage.querySelectorAll('.feature-card').forEach(c => {
            c.classList.remove('visible');
            c.style.transition = '';
        });
        targetPage.querySelectorAll('.info-card').forEach(c => {
            c.classList.remove('visible');
            c.style.transition = '';
        });
        const at = targetPage.querySelector('.about-text');
        if (at) at.classList.remove('visible');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();

    // Trigger animations after short delay (let page become active)
    setTimeout(triggerScrollAnimations, 100);
}

// ===========================
// HERO SECTION PARALLAX
// ===========================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        if (document.getElementById('home')?.classList.contains('active')) {
            const scrollY = window.scrollY;
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrollY < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
                heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.7));
            }
        }
    });
}

// ===========================
// HERO BADGE – add to HTML if missing
// ===========================
document.addEventListener('DOMContentLoaded', function () {
    // Inject badge into hero text if not present
    const heroText = document.querySelector('.hero-text');
    // if (heroText && !heroText.querySelector('.hero-badge')) {
    //     const badge = document.createElement('div');
    //     badge.className = 'hero-badge';
    //     badge.innerHTML = '<i class="fas fa-star"></i> Gestion Intelligente';
    //     heroText.insertBefore(badge, heroText.firstChild);
    // }

    // Inject hero stats
    if (heroText && !heroText.querySelector('.hero-stats')) {
        const stats = document.createElement('div');
        stats.className = 'hero-stats';
        stats.innerHTML = `
            <div class="hero-stat">
                <span class="counter" data-target="50">0</span>
                <span>Restaurants</span>
            </div>
            <div class="hero-stat">
                <span class="counter" data-target="65">0</span><span style="color:white">%</span>
                <span>Efficacité</span>
            </div>
            <div class="hero-stat">
                <span class="counter" data-target="98">0</span><span style="color:white">%</span>
                <span>Satisfaction</span>
            </div>
        `;
        heroText.appendChild(stats);
    }

    // Inject floating orbs in hero
    const heroSection = document.querySelector('.hero');
    if (heroSection && !heroSection.querySelector('.hero-orb')) {
        heroSection.insertAdjacentHTML('beforeend', `
            <div class="hero-orb hero-orb-1"></div>
            <div class="hero-orb hero-orb-2"></div>
            <div class="hero-orb hero-orb-3"></div>
        `);
    }

    // Inject section tags
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        if (!header.querySelector('.section-tag') && header.querySelector('h2')) {
            const h2 = header.querySelector('h2');
            const tag = document.createElement('div');
            tag.className = 'section-tag';
            const text = h2.textContent.includes('Fonctionna') ? '✦ Plateforme' :
                         h2.textContent.includes('Mission') ? '✦ Nos Valeurs' : '✦ À Propos';
            tag.textContent = text;
            header.insertBefore(tag, h2);
        }
    });

    // Wrap info cards in a list container
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        const infoCards = contactInfo.querySelectorAll('.info-card');
        if (infoCards.length && !contactInfo.querySelector('.info-cards-list')) {
            const list = document.createElement('div');
            list.className = 'info-cards-list';
            infoCards.forEach(card => list.appendChild(card));
            // Insert after description
            const desc = contactInfo.querySelector('.contact-info-description');
            if (desc) {
                desc.after(list);
            } else {
                contactInfo.insertBefore(list, contactInfo.children[2]);
            }
        }
    }

    // Navigation clicks
    document.querySelectorAll('[data-page]').forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            if (pageName) showPage(pageName);
        });
    });

    // Mobile menu
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    const mobileOverlay = document.getElementById('mobileOverlay');
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });
    window.addEventListener('resize', handleResize);

    // Initial trigger
    setTimeout(triggerScrollAnimations, 200);

    // Counter animation
    animateCounters();
});

// ===========================
// COUNTER ANIMATION
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===========================
// MOBILE MENU
// ===========================
function openMobileMenu() {
    document.getElementById('navMenu')?.classList.add('active');
    document.getElementById('mobileOverlay')?.classList.add('active');
    document.getElementById('mobileMenuToggle')?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    document.getElementById('navMenu')?.classList.remove('active');
    document.getElementById('mobileOverlay')?.classList.remove('active');
    document.getElementById('mobileMenuToggle')?.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu?.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
}

function handleResize() {
    if (window.innerWidth > 768) closeMobileMenu();
}

// ===========================
// HOVER TILT on Feature Cards
// ===========================
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.feature-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const inside = Math.abs(x) < rect.width / 2 && Math.abs(y) < rect.height / 2;

        if (inside) {
            const tiltX = (y / rect.height) * 6;
            const tiltY = -(x / rect.width) * 6;
            card.style.transform = `translateY(-8px) scale(1.01) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
    });
});

document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.transform = '';
    });
});

// Reset tilt on mouse leave from card
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});
