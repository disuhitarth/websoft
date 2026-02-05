/* ========================================
   AURA BUILD GROUP - JAVASCRIPT
   Interactions, Animations & Functionality
   ======================================== */

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const projectCards = document.querySelectorAll('.project-card');
const expertiseCards = document.querySelectorAll('.expertise-card');
const reviewCards = document.querySelectorAll('.review-card');
const teamMembers = document.querySelectorAll('.team-member');
const timelineItems = document.querySelectorAll('.timeline-item');

// ========== NAVIGATION ==========

// Hamburger menu toggle
if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Navbar scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop;
});

// Active link highlighting based on scroll position
window.addEventListener('scroll', () => {
  let current = '';

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ========== SMOOTH SCROLL ==========

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// ========== SCROLL ANIMATIONS ==========

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections
document.querySelectorAll('.section, .cta-section').forEach(section => {
  observer.observe(section);
});

// Observe individual items with stagger
const itemObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const itemObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up', 'stagger-item');
      itemObserver.unobserve(entry.target);
    }
  });
}, itemObserverOptions);

// Observe project cards
projectCards.forEach(card => {
  itemObserver.observe(card);
});

// Observe expertise cards
expertiseCards.forEach(card => {
  itemObserver.observe(card);
});

// Observe review cards
reviewCards.forEach(card => {
  itemObserver.observe(card);
});

// Observe team members
teamMembers.forEach(member => {
  itemObserver.observe(member);
});

// Observe timeline items
timelineItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
  itemObserver.observe(item);
});

// ========== PARALLAX EFFECT ==========

// Parallax effect on hero section
const hero = document.querySelector('.hero');
const heroBg = document.querySelector('.hero-bg');

if (hero && heroBg) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxOffset = scrollY * 0.5;

    heroBg.style.transform = `translateY(${parallaxOffset}px)`;
  });
}

// ========== CLIENT LOGOS ANIMATION ==========

const clientLogos = document.querySelectorAll('.client-logo');
clientLogos.forEach((logo, index) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        logo.style.animation = `fadeInUp 0.6s ease-out ${index * 0.05}s both`;
        observer.unobserve(logo);
      }
    });
  }, observerOptions);

  observer.observe(logo);
});

// ========== HOVER EFFECTS ==========

// Project card hover effect
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', () => {
    card.style.zIndex = 'auto';
  });
});

// Expertise card hover effect
expertiseCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const otherCards = document.querySelectorAll('.expertise-card');
    otherCards.forEach(c => {
      if (c !== card) {
        c.style.opacity = '0.7';
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    const otherCards = document.querySelectorAll('.expertise-card');
    otherCards.forEach(c => {
      c.style.opacity = '1';
    });
  });
});

// ========== SMOOTH SCROLL POSITION ==========

// Get current scroll position and update nav
function updateScrollPosition() {
  const scrollPosition = window.scrollY;

  // Update scroll position class for scroll-based styling
  if (scrollPosition > window.innerHeight / 2) {
    document.body.classList.add('scrolled-past-hero');
  } else {
    document.body.classList.remove('scrolled-past-hero');
  }
}

window.addEventListener('scroll', updateScrollPosition);

// ========== LOAD ANIMATIONS ==========

// Add animations to hero on page load
window.addEventListener('load', () => {
  const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-ctas');
  heroElements.forEach((el, index) => {
    el.style.animationPlayState = 'running';
  });
});

// ========== MOBILE MENU ENHANCEMENTS ==========

// Prevent scroll when mobile menu is open
const toggleBodyScroll = () => {
  if (navMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

hamburger?.addEventListener('click', toggleBodyScroll);

// ========== LAZY LOAD IMAGES ==========

// Intersection Observer for lazy loading images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '50px'
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// ========== FORM INTERACTIONS ==========

// Email link interaction
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    // Allow default action but add animation
    const btn = e.currentTarget;
    btn.style.transform = 'scale(0.98)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 100);
  });
}

// ========== ACCESSIBILITY ==========

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navMenu.classList.remove('active');
    hamburger?.classList.remove('active');
  }
});

// ========== PERFORMANCE OPTIMIZATION ==========

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(() => {
  updateScrollPosition();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

// ========== INITIALIZATION ==========

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in class to sections for stagger effect
  document.querySelectorAll('.expertise-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  document.querySelectorAll('.review-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Log initialization complete
  console.log('Aura Build Group website initialized');
});

// ========== CUSTOM CURSOR (Optional Enhancement) ==========

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Add any additional animations that respect user preferences
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.willChange = 'transform';
    });

    btn.addEventListener('mouseleave', function() {
      this.style.willChange = 'auto';
    });
  });
}

// ========== ERROR HANDLING ==========

// Graceful error handling for missing elements
try {
  // Test critical elements exist
  if (!navbar) console.warn('Navbar element not found');
  if (!navMenu) console.warn('Nav menu element not found');
} catch (error) {
  console.error('Error initializing navigation:', error);
}

// ========== PAGE VISIBILITY ==========

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause any animations if needed
    document.body.style.animationPlayState = 'paused';
  } else {
    // Resume animations
    document.body.style.animationPlayState = 'running';
  }
});
