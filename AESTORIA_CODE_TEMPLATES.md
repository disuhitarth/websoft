# AESTORIA - CODE TEMPLATES & IMPLEMENTATION EXAMPLES

## HTML STRUCTURE TEMPLATES

### Navigation Component
```html
<nav class="navbar">
  <a href="/" class="navbar-logo">
    <img src="/logo.svg" alt="Aestoria" width="99" height="22">
  </a>

  <ul class="nav-menu">
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
    <li><a href="#services" class="nav-link">Services</a></li>
    <li><a href="#contact" class="nav-link">Contact</a></li>
  </ul>

  <button class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>
```

### Hero Section
```html
<section class="hero" id="home">
  <img src="/hero-bg.jpg" alt="Hero background" class="hero-bg">

  <div class="hero-overlay"></div>

  <div class="hero-content">
    <h1 class="hero-title">Premium Interior Design & Architecture</h1>
    <p class="hero-subtitle">Crafting timeless spaces that inspire and elevate your lifestyle</p>
    <a href="#portfolio" class="btn btn-primary">Explore Our Work</a>
  </div>
</section>
```

### Project Grid
```html
<section class="portfolio" id="portfolio">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>

    <div class="grid">
      <div class="grid-item">
        <img src="/project-1.jpg" alt="Luxury Bedroom Redesign" loading="lazy">
        <div class="grid-overlay"></div>
        <div class="grid-content">
          <h3>Modern Luxury Bedroom</h3>
          <p>Residential Design</p>
        </div>
      </div>

      <div class="grid-item">
        <img src="/project-2.jpg" alt="Contemporary Office" loading="lazy">
        <div class="grid-overlay"></div>
        <div class="grid-content">
          <h3>Contemporary Office</h3>
          <p>Commercial Design</p>
        </div>
      </div>

      <!-- More grid items -->
    </div>
  </div>
</section>
```

### Case Study Section
```html
<section class="case-study">
  <div class="container">
    <div class="case-grid">
      <div class="case-image">
        <img src="/case-study-1.jpg" alt="Case study image">
      </div>

      <div class="case-content">
        <div class="case-meta">
          <span class="meta-item">Residential</span>
          <span class="meta-item">2024</span>
          <span class="meta-item">3 months</span>
        </div>

        <h2>Modern Minimalist Penthouse</h2>
        <p class="case-intro">Transform a dated luxury apartment into a contemporary sanctuary.</p>

        <div class="case-section">
          <h3>The Challenge</h3>
          <p>The client wanted a modern aesthetic while maintaining the luxury feel of their
             penthouse. The existing design felt outdated and didn't reflect their lifestyle.</p>
        </div>

        <div class="case-section">
          <h3>Our Approach</h3>
          <p>We implemented a minimalist design philosophy with carefully selected materials
             and a refined color palette. Strategic lighting and spatial planning created an
             open, airy feel while maintaining intimacy.</p>
        </div>

        <div class="case-section">
          <h3>Results</h3>
          <ul class="results-list">
            <li>40% increase in perceived space</li>
            <li>Improved natural lighting efficiency</li>
            <li>Enhanced entertainment functionality</li>
            <li>Client satisfaction: 100%</li>
          </ul>
        </div>

        <a href="/portfolio/penthouse" class="btn btn-outline">View Full Project</a>
      </div>
    </div>
  </div>
</section>
```

### Footer
```html
<footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h4>Aestoria Design</h4>
      <p>Premium interior design and architecture for discerning clients.</p>
      <div class="social-links">
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="Pinterest">Pinterest</a>
      </div>
    </div>

    <div class="footer-section">
      <h4>Services</h4>
      <ul>
        <li><a href="#services">Interior Design</a></li>
        <li><a href="#services">Architecture</a></li>
        <li><a href="#services">Consultation</a></li>
        <li><a href="#services">Installation</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Company</h4>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Contact</h4>
      <p>hello@aestoria.design</p>
      <p>+1 (555) 123-4567</p>
      <p>New York, NY 10001</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2024 Aestoria Design. All rights reserved.</p>
  </div>
</footer>
```

---

## CSS STYLE TEMPLATES

### Design Tokens & Variables
```css
:root {
  /* Colors */
  --color-bg-light: #f7f7f7;
  --color-bg-white: #ffffff;
  --color-text-primary: #000000;
  --color-text-secondary: #666666;
  --color-accent: #fd5e46;
  --color-accent-hover: #ff6d57;
  --color-link: #0099ff;
  --color-link-hover: #0077cc;

  /* Typography */
  --font-primary: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --base-size: 12px;

  /* Spacing */
  --sp-xs: 4px;
  --sp-sm: 8px;
  --sp-md: 12px;
  --sp-lg: 24px;
  --sp-xl: 32px;
  --sp-2xl: 60px;
  --sp-3xl: 80px;
  --sp-4xl: 100px;

  /* Transitions */
  --transition-fast: 0.2s ease-in-out;
  --transition-base: 0.3s ease-in-out;
  --transition-slow: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-linear: 0.4s linear;

  /* Z-Index Scale */
  --z-dropdown: 100;
  --z-sticky: 100;
  --z-fixed: 200;
  --z-modal: 999;
  --z-tooltip: 1000;
}
```

### Reset & Base Styles
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: var(--base-size);
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
  background-color: var(--color-bg-light);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

button {
  cursor: pointer;
  font: inherit;
}
```

### Typography System
```css
h1, .h1 {
  font: 900 64px / 1.2 var(--font-primary);
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

h2, .h2 {
  font: 700 48px / 1.2 var(--font-primary);
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
}

h3, .h3 {
  font: 600 32px / 1.2 var(--font-primary);
  color: var(--color-text-primary);
}

h4, .h4 {
  font: 600 24px / 1.3 var(--font-primary);
  color: var(--color-text-primary);
}

p, .body {
  font: 400 16px / 1.5 var(--font-secondary);
  color: var(--color-text-primary);
}

.body-large {
  font-size: 18px;
  line-height: 1.6;
}

.body-small {
  font-size: 14px;
  line-height: 1.4;
}

.text-muted {
  color: var(--color-text-secondary);
}

.text-light {
  color: rgba(255, 255, 255, 0.9);
}
```

### Navigation Styles
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: var(--sp-xl) var(--sp-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: var(--z-fixed);
  background: transparent;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
  flex-shrink: 0;
}

.navbar-logo img {
  width: 99px;
  height: 22px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 10px;
  margin: 0;
  padding: 0;
}

.nav-link {
  font: 400 16px var(--font-secondary);
  color: var(--color-text-primary);
  padding: 8px 12px;
  border-radius: 4px;
  transition: color var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-link);
  text-decoration: underline;
}

.hamburger {
  display: none;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 6px;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 1px;
  transition: all var(--transition-fast);
}

/* Mobile Menu */
@media (max-width: 809px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 64px;
    flex-direction: column;
    background: var(--color-bg-white);
    width: 100%;
    text-align: center;
    transition: left var(--transition-base);
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .nav-menu.active {
    left: 0;
  }
}
```

### Hero Section Styles
```css
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.5) brightness(0.8);
  will-change: transform;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  padding: var(--sp-3xl) var(--sp-lg);
  color: #ffffff;
  text-align: left;
  animation: fadeInUp 0.8s ease-out;
}

.hero-title {
  color: #ffffff;
  margin-bottom: var(--sp-lg);
  line-height: 1.2;
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.hero-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--sp-2xl);
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero .btn {
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

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

/* Responsive */
@media (max-width: 809px) {
  .hero-content {
    max-width: 100%;
    padding: var(--sp-xl) var(--sp-md);
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-subtitle {
    font-size: 16px;
  }
}
```

### Grid/Portfolio Styles
```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-md);
  padding: var(--sp-3xl) var(--sp-lg);
  will-change: auto;
}

.grid-item {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  will-change: transform;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 1;
}

.grid-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--sp-lg);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: #ffffff;
  z-index: 2;
  transform: translateY(100%);
  transition: transform var(--transition-base);
}

.grid-item h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #ffffff;
}

.grid-content p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.grid-item:hover img {
  transform: scale(1.05);
}

.grid-item:hover .grid-overlay {
  opacity: 1;
}

.grid-item:hover .grid-content {
  transform: translateY(0);
}

/* Responsive */
@media (min-width: 810px) and (max-width: 1199px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 809px) {
  .grid {
    grid-template-columns: 1fr;
    padding: var(--sp-xl) var(--sp-md);
  }
}
```

### Case Study Styles
```css
.case-study {
  padding: var(--sp-3xl) var(--sp-lg);
}

.case-grid {
  max-width: 1480px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--sp-3xl);
  align-items: start;
}

.case-image {
  position: relative;
}

.case-image img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 12px;
  will-change: transform;
}

.case-image:hover img {
  transform: scale(1.02);
  transition: transform var(--transition-base);
}

.case-content {
  display: flex;
  flex-direction: column;
  gap: var(--sp-lg);
}

.case-meta {
  display: flex;
  gap: var(--sp-lg);
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: var(--sp-lg);
}

.case-content h2 {
  font-size: 48px;
  margin-bottom: var(--sp-lg);
}

.case-intro {
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--sp-lg);
}

.case-section {
  border-top: 1px solid #e0e0e0;
  padding-top: var(--sp-lg);
}

.case-section h3 {
  font-size: 20px;
  margin-bottom: var(--sp-md);
  font-weight: 600;
}

.case-section p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-primary);
}

.results-list {
  list-style: none;
  padding: 0;
}

.results-list li {
  padding: 12px 0;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.results-list li:last-child {
  border-bottom: none;
}

.results-list li strong {
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1199px) {
  .case-grid {
    grid-template-columns: 1fr;
    gap: var(--sp-2xl);
  }

  .case-image img {
    height: 400px;
  }
}

@media (max-width: 809px) {
  .case-study {
    padding: var(--sp-xl) var(--sp-md);
  }

  .case-content h2 {
    font-size: 32px;
  }
}
```

### Button Styles
```css
.btn {
  display: inline-block;
  padding: 16px 32px;
  border-radius: 8px;
  font-family: var(--font-secondary);
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
  white-space: nowrap;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background-color: var(--color-accent);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(253, 94, 70, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(253, 94, 70, 0.2);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-link);
  border: 2px solid var(--color-link);
}

.btn-outline:hover {
  background-color: var(--color-link);
  color: #ffffff;
}

.btn-text {
  background-color: transparent;
  color: var(--color-link);
  padding: 8px 0;
  text-decoration: underline;
}

.btn-text:hover {
  color: var(--color-link-hover);
}

@media (max-width: 809px) {
  .btn {
    width: 100%;
  }
}
```

### Footer Styles
```css
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: var(--sp-3xl) var(--sp-lg);
}

.footer-container {
  max-width: 1480px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-2xl);
  margin-bottom: var(--sp-3xl);
}

.footer-section h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: var(--sp-lg);
}

.footer-section p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--sp-md);
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: var(--sp-md);
}

.footer-section a {
  color: var(--color-link);
  transition: color var(--transition-fast);
}

.footer-section a:hover {
  color: #ffffff;
}

.social-links {
  display: flex;
  gap: var(--sp-lg);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--sp-2xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

/* Responsive */
@media (max-width: 1199px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 809px) {
  .footer {
    padding: var(--sp-xl) var(--sp-md);
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: var(--sp-xl);
  }
}
```

### Utilities & Helpers
```css
.container {
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 var(--sp-lg);
}

.section {
  padding: var(--sp-3xl) var(--sp-lg);
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: var(--sp-2xl);
  text-align: center;
}

.scroll-lock {
  overflow: hidden;
}

/* Scroll animations */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Stagger animations */
.stagger-item:nth-child(1) { animation-delay: 0.05s; }
.stagger-item:nth-child(2) { animation-delay: 0.1s; }
.stagger-item:nth-child(3) { animation-delay: 0.15s; }
.stagger-item:nth-child(4) { animation-delay: 0.2s; }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## JAVASCRIPT IMPLEMENTATION

### Scroll-Triggered Animations
```javascript
// Intersection Observer for scroll animations
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

// Observe all sections
document.querySelectorAll('.section, .grid-item').forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});
```

### Navigation Scroll Effects
```javascript
// Navbar scroll effect
const navbar = document.querySelector('.navbar');
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
```

### Mobile Menu Toggle
```javascript
// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
```

### Smooth Scroll Navigation
```javascript
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
```

### Parallax Effect
```javascript
// Parallax background on hero
const hero = document.querySelector('.hero');
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const parallaxOffset = scrollY * 0.5;

  if (heroBg) {
    heroBg.style.transform = `translateY(${parallaxOffset}px)`;
  }
});
```

### Active Link Highlighting
```javascript
// Update active nav link based on current section
const sections = document.querySelectorAll('.section, section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
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
```

---

## ANIMATION LIBRARY EXAMPLES

### Using Framer Motion (React)
```javascript
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="hero">
      <motion.img
        src="hero-bg.jpg"
        className="hero-bg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Premium Interior Design
        </motion.h1>
      </motion.div>
    </section>
  );
}
```

### Using GSAP with ScrollTrigger
```javascript
gsap.registerPlugin(ScrollTrigger);

// Grid item stagger animation
gsap.utils.toArray('.grid-item').forEach((item, index) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top center+=100px',
      toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: index * 0.1,
    ease: 'power2.out'
  });
});
```

---

**Code Templates Version**: 1.0
**Created**: 2026-02-05
**Ready for**: Copy-paste implementation, LLM code generation, developer reference
