# AESTORIA FRAMER WEBSITE - COMPLETE REPLICATION GUIDE

## TABLE OF CONTENTS
1. [Brand Identity & Philosophy](#brand-identity)
2. [Design System](#design-system)
3. [Page Structure & URLs](#page-structure)
4. [Visual Hierarchy](#visual-hierarchy)
5. [Component Library](#component-library)
6. [Animations & Interactions](#animations)
7. [Responsive Design](#responsive-design)
8. [Implementation Guide](#implementation-guide)

---

## 1. BRAND IDENTITY & PHILOSOPHY {#brand-identity}

### Overall Aesthetic
- **Style**: Contemporary Luxury Minimalism
- **Vibe**: Premium, sophisticated, high-end design portfolio
- **Tone**: Professional, artistic, aspirational
- **Key Principle**: "Less is more" - Quality over quantity, whitespace as design element

### Brand Positioning
- Target: High-end interior design and architecture clients
- Visual Philosophy: Refined elegance through restraint
- Design Approach: Storytelling through imagery and careful spacing
- Market Position: Luxury/Premium tier

---

## 2. DESIGN SYSTEM {#design-system}

### Color Palette

| Element | Color | Hex | RGB | Usage |
|---------|-------|-----|-----|-------|
| Primary Background | Off-White/Light Gray | #f7f7f7 | rgb(247, 247, 247) | Page backgrounds, neutral areas |
| Secondary Background | White | #ffffff | rgb(255, 255, 255) | Cards, content blocks |
| Primary Text | Deep Black | #000000 | rgb(0, 0, 0) | Headlines, body text |
| Accent/Link Color | Coral-Red | #fd5e46 | rgb(253, 94, 70) | Primary CTAs, highlights |
| Interactive Link | Cyan Blue | #0099ff | rgb(0, 153, 255) | Links, secondary CTAs |
| Overlay Dark | Transparent Black | rgba(0, 0, 0, 0.4) | - | Hero overlays, depth |
| Overlay Medium | Transparent Black | rgba(0, 0, 0, 0.2) | - | Subtle darkening |

### Typography System

#### Font Families
- **Primary Font**: Geist
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 900 (Black)
  - Use Case: Headlines, primary UI text

- **Secondary Font**: Inter
  - Weights: 400 (Regular), 600 (SemiBold), 700 (Bold), 900 (Black)
  - Styles: Regular, Italic variants
  - Use Case: Body text, secondary content

#### Typography Specifications

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|-----------------|
| H1 Headline | Geist | 900 | 48-72px | 1.2em | -0.02em |
| H2 Subheading | Geist | 700 | 32-48px | 1.2em | -0.01em |
| H3 Section Title | Geist | 600 | 24-32px | 1.2em | 0 |
| Body Text | Inter | 400 | 16-18px | 1.5em | 0 |
| Small Text | Inter | 400 | 12-14px | 1.4em | 0 |
| Link Text | Inter | 400 | 16px | 1.4em | 0 |
| Base Size | All | - | 12px (CSS variable) | - | - |

#### Font Loading Strategy
- Font display: `swap` (shows fallback immediately, swaps when custom font loads)
- Reduced motion support: Respects `prefers-reduced-motion` media query
- Font stack fallbacks: Sans-serif system fonts as backup

### Spacing System

Consistent spacing using a 4px base unit:
- **Extra Small**: 4px (xs-spacing)
- **Small**: 8px (s-spacing)
- **Medium**: 12px (m-spacing)
- **Large**: 24px (l-spacing)
- **XL**: 32px (xl-spacing)
- **2XL**: 60px (xxl-spacing)
- **3XL**: 80px (xxxl-spacing)
- **4XL**: 100px (4xl-spacing)

### Shadow & Depth System
- Minimal use of shadows
- Primarily relies on color, spacing, and layering
- Subtle rgba overlays for depth (0.2-0.4 opacity)
- No harsh drop shadows; maintains clean aesthetic

---

## 3. PAGE STRUCTURE & URLs {#page-structure}

### Navigation Structure

The website uses a single-page application (SPA) architecture with Framer routing:

#### Primary Navigation Items
1. **Home** - URL: `/` (Root landing page)
2. **About** - URL: `/#about` (About section)
3. **Portfolio** - URL: `/#portfolio` (Project showcase)
4. **Services** - URL: `/#services` (Service offerings)
5. **Contact** - URL: `/#contact` (Contact form/CTA)

#### Header Navigation Component
```
Fixed Navigation Bar
├── Logo (Left side)
│   └── Aspect ratio: 4.5:1 (99px × 22px)
├── Navigation Links (Center/Right)
│   ├── About
│   ├── Portfolio
│   ├── Services
│   ├── Contact
│   └── Link spacing: 10px gaps
└── Menu Toggle (Mobile - 32×32px hamburger)
    └── Appears at breakpoint: ≤809px
```

### Page Sections (Top to Bottom)

#### Section 1: Hero/Header
- **Height**: 100vh (full viewport)
- **Background**: Large filtered image with gradient overlay
- **Layout**: Split screen diagonal composition
  - Left: Text content (max-width: 560px)
  - Right: High-resolution image
- **Content**: Headline, subheading, CTA buttons
- **Overlay**: Dark gradient at 298 degrees with saturation filter (1.5x)
- **Z-Index**: 8-10 (above content)

#### Section 2: Featured Projects Grid
- **Grid Type**: CSS Grid
- **Columns**: 4 columns on desktop
- **Gap**: 12px between items
- **Responsive**: Adapts to 2-3 columns on tablet, 1 column on mobile
- **Item Styling**:
  - Border radius: 16px
  - Aspect ratio: 16:9 or 1:1 (varies)
  - Hover effect: Transform scale (subtle grow)
- **Featured Item**: Often spans 2 rows for visual emphasis

#### Section 3: Portfolio/Project Showcase
- **Layout**: Horizontal scroll carousel (Framer's scroll-based)
- **Container**: 800px width cards
- **Total Height**: 2000px (scroll-triggered animations)
- **Gap**: 12px between cards
- **Interaction**: Sticky sidebar navigation (100vh height, top: 10px)
- **Project Cards**:
  - Image height: 600px
  - Width: Responsive (full-width on mobile, 80% on tablet)
  - Aspect ratio: Maintained through CSS

#### Section 4: Case Study Sections
- **Layout**: Two-column asymmetrical
- **Column Ratio**: 1.6:1 (image side larger)
- **Max Width**: 1480px centered
- **Horizontal Gap**: 80px between columns
- **Vertical Gap**: 32px between subsections
- **Content Area**: Max-width 800px for text
- **Image Container**:
  - Height: 600px
  - Aspect ratio: 4:3 or 16:9
  - Border radius: 8-12px

#### Section 5: Services/Offerings
- **Grid Layout**: 2-3 columns
- **Cards**: Equal width with 24px padding inside
- **Typography**: Icon + Title + Description
- **Spacing**: 40px vertical gaps

#### Section 6: Contact/CTA Section
- **Background**: Dark (#000000)
- **Padding**: 80px horizontal, 60px vertical
- **Layout**: Centered text with CTA buttons
- **Button Styles**:
  - Primary: Coral red (#fd5e46) background
  - Secondary: Outlined/text only
  - Text color: White on dark background
  - Padding: 16px 32px minimum

#### Section 7: Footer
- **Background**: Black (#000000)
- **Padding**: 80px horizontal, 60px vertical
- **Layout**: Flex columns with 60px gaps
- **Content Columns**:
  - Branding/Logo
  - Quick links
  - Services list
  - Contact info
  - Social links (if any)
- **Bottom Padding**: 180px for breathing room

---

## 4. VISUAL HIERARCHY {#visual-hierarchy}

### Hierarchy Techniques

#### 1. Size Differentiation
- **H1 Headlines**: 48-72px (most prominent)
- **H2 Subheadings**: 32-48px
- **Body Text**: 16-18px
- **Small Text**: 12-14px
- **Ratio**: Maintain 1.5x multiplier between hierarchy levels

#### 2. Weight Differentiation
- **Headlines**: 700-900 weight (bold/black)
- **Subheadings**: 600 weight (semibold)
- **Body**: 400 weight (regular)
- **Emphasis**: 600 weight within body text

#### 3. Color Contrast
- **Primary Text**: Deep black (#000000) on light backgrounds
- **Links**: Cyan (#0099ff) for interactive elements
- **Accents**: Coral red (#fd5e46) for primary actions
- **Contrast Ratio**: Minimum 4.5:1 for accessibility

#### 4. Whitespace Management
- **Section Padding**: 80-100px vertical
- **Column Gaps**: 32-60px horizontal
- **Element Spacing**: 12-24px local spacing
- **Breathing Room**: Extensive use creates luxury feel
- **Grid Gaps**: Consistent 12px throughout

#### 5. Layering & Depth
- **Z-Index Scale**: 0-2000+ for layering
- **Hero Overlay**: Z-index 8-10 (floats above content)
- **Sticky Elements**: Z-index 100+ (sticky nav, sidebars)
- **Modals/Overlays**: Z-index 314159 (extremely high)

#### 6. Visual Weight Distribution
- **Large Imagery**: Creates focal points
- **Text Emphasis**: Bold weights on key phrases
- **Color Blocking**: Strategic use of accent colors
- **Alignment**: Left-aligned for Western reading, centered for emphasis

### Content Hierarchy Pattern
```
Logo/Brand (Top Left)
    ↓
Main Headline (Large, Bold)
    ↓
Subheading (Medium, Regular)
    ↓
Body Copy (Small, Regular)
    ↓
CTA Links (Colored, Underlined)
    ↓
Supporting Imagery (Positioned right/below)
```

---

## 5. COMPONENT LIBRARY {#component-library}

### Navigation Component

#### Fixed Header
```
Position: Fixed (top: 0)
Width: 100%
Height: Auto (32px + padding)
Padding: 32px horizontal, 16px vertical
Background: Transparent (or white with opacity on scroll)
Z-Index: 100
Flex Layout: Space-between

├── Logo
│   ├── Width: 99px
│   ├── Height: 22px
│   ├── Aspect Ratio: 4.5:1
│   └── Content: Company logo/wordmark
│
├── Navigation Links (Hidden on mobile)
│   ├── Display: Flex
│   ├── Gap: 10px
│   ├── Link Style:
│   │   ├── Color: #000000
│   │   ├── Font: Inter 400, 16px
│   │   ├── Text-decoration: None
│   │   └── Hover:
│   │       ├── Color: #0099ff
│   │       └── Text-decoration: underline
│   └── Current Page:
│       ├── Color: #fd5e46
│       └── Text-decoration: underline
│
└── Mobile Menu Toggle
    ├── Display: None (visible at 809px breakpoint)
    ├── Size: 32×32px
    ├── Icon: Hamburger menu
    ├── Background: Transparent
    └── Hover: Scale 1.1, opacity 0.8
```

### Hero Section Component

```
Hero Container
├── Background Image
│   ├── Size: Cover
│   ├── Position: Center
│   ├── Filters:
│   │   ├── saturate(1.5)
│   │   ├── brightness(0.8)
│   │   └── filter-shadow (rgba 0,0,0,0.4)
│   └── Aspect Ratio: 16:9
│
├── Overlay Gradient
│   ├── Angle: 298deg
│   ├── Color: rgba(0, 0, 0, 0.4)
│   ├── Position: Absolute, full cover
│   └── Z-Index: 2
│
└── Content Area (Z-Index: 3)
    ├── Position: Relative/Absolute centered
    ├── Max-Width: 560px
    ├── Padding: 80px 32px
    ├── H1 Headline
    │   ├── Font: Geist 900
    │   ├── Size: 64px
    │   ├── Color: #ffffff
    │   ├── Line-height: 1.2em
    │   └── Margin-bottom: 24px
    │
    ├── Subheading
    │   ├── Font: Inter 400
    │   ├── Size: 18px
    │   ├── Color: rgba(255,255,255,0.9)
    │   ├── Line-height: 1.5em
    │   └── Margin-bottom: 32px
    │
    └── CTA Button
        ├── Background: #fd5e46
        ├── Color: #ffffff
        ├── Padding: 16px 32px
        ├── Border-radius: 8px
        ├── Font: Inter 600, 16px
        ├── Cursor: Pointer
        ├── Transition: All 0.3s ease
        └── Hover:
            ├── Background: #ff6d57
            ├── Transform: translateY(-2px)
            └── Box-shadow: 0 8px 24px rgba(253,94,70,0.3)
```

### Project Card Component

```
Project Card
├── Container
│   ├── Position: Relative
│   ├── Overflow: Hidden
│   ├── Border-radius: 16px
│   ├── Aspect-ratio: 16/9
│   └── Flex: none (width: auto)
│
├── Image
│   ├── Size: Cover
│   ├── Position: Absolute, 0,0
│   ├── Transition: Transform 0.4s ease
│   └── Hover: Transform scale(1.05)
│
├── Overlay (Hover state)
│   ├── Position: Absolute, full cover
│   ├── Background: rgba(0,0,0,0.3)
│   ├── Opacity: 0 (default) → 1 (hover)
│   ├── Transition: Opacity 0.3s ease
│   └── Z-Index: 2
│
└── Text Content (On hover or below image)
    ├── Position: Absolute, bottom
    ├── Padding: 24px
    ├── Background: Linear-gradient (transparent top to black bottom)
    ├── H3 Title
    │   ├── Font: Geist 700
    │   ├── Size: 24px
    │   ├── Color: #ffffff
    │   └── Margin-bottom: 8px
    └── Description
        ├── Font: Inter 400
        ├── Size: 14px
        ├── Color: rgba(255,255,255,0.8)
        └── Line-height: 1.4em
```

### Case Study Section Component

```
Case Study Container
├── Max-width: 1480px
├── Margin: 0 auto
├── Padding: 80px 32px
└── Display: Grid (2 columns on desktop)

├── Image Column
│   ├── Flex: 1.6
│   ├── Image
│   │   ├── Width: 100%
│   │   ├── Height: 600px
│   │   ├── Object-fit: Cover
│   │   ├── Border-radius: 12px
│   │   └── Box-shadow: None (or very subtle)
│   └── Gap from text: 80px
│
└── Content Column
    ├── Flex: 1
    ├── Display: Flex, flex-direction: column
    ├── Gap: 32px between sections
    │
    ├── Header Section
    │   ├── H2 Title
    │   │   ├── Font: Geist 700
    │   │   ├── Size: 48px
    │   │   ├── Color: #000000
    │   │   └── Margin-bottom: 16px
    │   │
    │   ├── Project Meta
    │   │   ├── Font: Inter 400
    │   │   ├── Size: 14px
    │   │   ├── Color: #666666
    │   │   ├── Display: Flex
    │   │   └── Gap: 24px (Category | Year | Client)
    │   │
    │   └── Quick Description
    │       ├── Font: Inter 400
    │       ├── Size: 16px
    │       ├── Color: #333333
    │       └── Line-height: 1.6em
    │
    ├── Challenge Section
    │   ├── H3: "Challenge"
    │   ├── Font: Geist 600, 18px
    │   └── Body: Inter 400, 16px
    │
    ├── Solution Section
    │   ├── H3: "Solution"
    │   ├── Font: Geist 600, 18px
    │   └── Body: Inter 400, 16px
    │
    ├── Results/Outcome
    │   ├── H3: "Results"
    │   ├── Format: Bullet points or metrics
    │   ├── Font: Inter 400, 16px
    │   └── Metrics highlighted: Bold 700 weight
    │
    └── CTA Button (Bottom)
        ├── Style: Outlined or text-only
        ├── Color: #0099ff
        ├── Text: "View Project" or "Learn More"
        └── Hover: Underline animation
```

### Link Component

```
Link (Text-based)
├── Default State
│   ├── Color: #0099ff (if primary action)
│   ├── Color: #000000 (if navigation)
│   ├── Text-decoration: None (usually)
│   ├── Font: Inter 400, 16px
│   └── Cursor: Pointer
│
└── Hover State
    ├── Color: #0077cc (darker cyan)
    ├── Text-decoration: Underline
    ├── Transition: All 0.2s ease
    └── Transform: None (text-only links stay in place)

Link (Button Style)
├── Default
│   ├── Background: #fd5e46
│   ├── Color: #ffffff
│   ├── Padding: 16px 32px
│   ├── Border-radius: 8px
│   ├── Border: None
│   └── Font: Inter 600, 16px
│
└── Hover
    ├── Background: #ff6d57 (lighter coral)
    ├── Transform: translateY(-2px)
    ├── Box-shadow: 0 8px 24px rgba(253,94,70,0.3)
    └── Transition: All 0.3s ease

Link (Text Outline)
├── Default
│   ├── Background: Transparent
│   ├── Color: #0099ff
│   ├── Border: 2px solid #0099ff
│   ├── Padding: 12px 24px
│   └── Border-radius: 6px
│
└── Hover
    ├── Background: #0099ff
    ├── Color: #ffffff
    └── Transition: All 0.3s ease
```

---

## 6. ANIMATIONS & INTERACTIONS {#animations}

### Scroll Animations

#### GPU-Accelerated Scrolling
- **Property Used**: `will-change: transform`
- **Purpose**: Enables GPU acceleration for smooth scroll-triggered animations
- **Applied To**: All major content sections, cards, images

#### Parallax Effects
- **Type**: Subtle depth parallax on hero background
- **Formula**: Background moves at 0.5x scroll speed vs. foreground at 1x
- **Implementation**: `transform: translateY(calc(scrollY * 0.5px))`
- **Easing**: Linear (no easing for parallax)

#### Staggered Section Entrance
- **Trigger**: Each section as it comes into viewport (80% visibility)
- **Animation**: Fade-in + slight upward movement
- **Duration**: 0.6-0.8s
- **Stagger Delay**: 0.1-0.15s between child elements
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (smooth overshoot)

#### Scroll Progress Indicators
- **Type**: Sidebar progress bar or indicator
- **Behavior**: Grows as user scrolls down
- **Visual**: Line that fills from top to bottom
- **Color**: #fd5e46 accent color
- **Sticky Position**: Fixed to right side or left sidebar

### Hover Animations

#### Link Hover Effects
```
Text Links:
├── Color change: #000000 → #0099ff
├── Duration: 0.2s
├── Easing: ease-in-out
└── Optional: Underline expansion animation

Button Hover:
├── Background color shift (lighter shade)
├── Transform: translateY(-2px) [slight lift]
├── Box-shadow: Addition of 8px blur shadow
├── Duration: 0.3s
└── Easing: cubic-bezier(0.34, 1.56, 0.64, 1)

Card Hover:
├── Image: Scale 1.05 (5% zoom)
├── Overlay opacity: 0 → 0.3
├── Shadow: Add 0 12px 32px rgba(0,0,0,0.15)
├── Duration: 0.4s
└── Easing: ease-out
```

#### Image Hover States
- **On hover**: Slight zoom (scale 1.05)
- **Overlay**: Dark overlay appears (opacity 0.3)
- **Text**: Optional text appears at bottom with gradient background
- **Transition**: Smooth 0.4s ease

### Entrance Animations

#### Page Load Animation
```
Sequence:
1. Logo + Navigation fade-in: 0-300ms
2. Hero headline: Stagger in with slight upward movement
   ├── Start: opacity 0, transform translateY(20px)
   ├── End: opacity 1, transform translateY(0)
   ├── Duration: 600ms
   └── Delay: 200ms
3. Hero description: Similar to headline, delay +100ms
4. CTA Button: Scale-in effect
   ├── Start: opacity 0, transform scale(0.95)
   ├── End: opacity 1, transform scale(1)
   ├── Duration: 600ms
   └── Delay: 400ms
5. Hero background image: Gradual fade-in or subtle zoom
   ├── Duration: 800ms
   └── Easing: ease-out
```

#### Section Entrance (Scroll-based)
```
Each section as it comes into view:
├── Grid items: Staggered entrance
│   ├── Item 1: Delay 0ms
│   ├── Item 2: Delay 100ms
│   ├── Item 3: Delay 200ms
│   └── Item 4: Delay 300ms
├── Animation: Fade-in + translateY(-20px)
├── Duration: 500ms per item
└── Easing: ease-out
```

### Micro-interactions

#### Text Selection Interaction
- **Highlight Color**: #fd5e46 with reduced opacity
- **Feedback**: Smooth color transition when text selected

#### Input Focus States
```
Form Inputs:
├── Default: Border 1px solid #cccccc
├── Focus:
│   ├── Border: 2px solid #0099ff
│   ├── Box-shadow: 0 0 0 3px rgba(0,153,255,0.1)
│   ├── Transition: 0.2s ease
│   └── Outline: None
└── Error: Border color #ff3333
```

#### Loading States
- **Spinner**: Minimal animated circle
- **Color**: #fd5e46
- **Size**: 32×32px typical
- **Animation**: Rotating 360° in 1s, infinite loop
- **Easing**: Linear

#### Interaction Feedback
- **Click feedback**: Slight scale reduction (0.98) for 100ms
- **Duration**: 100-200ms for all micro-interactions
- **Easing**: ease-out or cubic-bezier(0.34, 1.56, 0.64, 1)

---

## 7. RESPONSIVE DESIGN {#responsive-design}

### Breakpoint System

```
Desktop:      1200px and above
Tablet:       810px - 1199px
Mobile:       Below 809px (max 808px)
```

### Desktop Layout (1200px+)

#### Navigation
- Full horizontal menu visible
- Logo on left, navigation on right
- Spacing: 32px padding
- No hamburger menu

#### Hero Section
- Full 100vh height
- Split-screen layout: 50% image + 50% text
- Max content width: 560px
- Padding: 80px 60px

#### Grid Layouts
- 4 columns for project grids
- 12px gaps between items
- Full-width containers

#### Case Study Sections
- Two-column layout (1.6:1 ratio)
- Side-by-side image and text
- 80px gap between columns
- Max container width: 1480px

### Tablet Layout (810px - 1199px)

#### Navigation
- Same structure, slightly reduced padding
- Padding: 24px 40px
- Font size: 14px for links

#### Hero Section
- Still 100vh but adjusted padding
- Padding: 60px 40px
- Max content width: 100%
- Text becomes primary focus

#### Grid Layouts
- Reduce to 2-3 columns
- Maintain 12px gaps
- Slightly larger cards for readability

#### Case Study Sections
- Stack to single column at lower tablet resolutions
- Two-column at higher tablet resolutions
- 60px gap between sections
- Image now full width when stacked

#### Footer
- 2-3 columns of content
- Reduced padding: 60px 40px
- Gap between columns: 40px

### Mobile Layout (Below 809px)

#### Navigation
- Hamburger menu toggle visible
- Logo centered or left-aligned
- Navigation hidden in drawer menu
- Padding: 16px 20px

#### Hero Section
- 100vh height maintained
- Full-width text area
- Padding: 40px 20px
- Max content width: 100%
- Font sizes reduced by 10-15%
  - H1: 48px → 36-40px
  - Body: 16px → 14-15px

#### Grid Layouts
- Single column layout
- Cards: 100% width
- Gap: 12px maintained
- Images: Full-width responsive

#### Case Study Sections
- Single column stack
- Image: 100% width
- Gap: 24px between image and text
- Padding: 40px 20px
- Max width: 100%

#### Footer
- Stacked vertically
- Single column
- Padding: 40px 20px
- Gap: 32px between sections

### Responsive Typography

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| H1 | 64px | 48px | 36px |
| H2 | 48px | 36px | 28px |
| H3 | 32px | 24px | 20px |
| Body | 18px | 16px | 15px |
| Small | 14px | 13px | 12px |

### Responsive Spacing

| Level | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| Section Padding | 80px | 60px | 40px |
| Horizontal Padding | 32px | 24px | 20px |
| Gap between columns | 80px | 60px | 24px |
| Grid gap | 12px | 12px | 12px |
| Vertical gap | 32px | 24px | 16px |

### Media Query Syntax

```css
/* Mobile First Approach */
/* Base: Mobile styles (default) */

/* Tablet and above */
@media (min-width: 810px) {
  /* Tablet-specific overrides */
}

/* Desktop and above */
@media (min-width: 1200px) {
  /* Desktop-specific overrides */
}

/* Landscape mode */
@media (orientation: landscape) and (max-height: 500px) {
  /* Compact layouts for landscape */
}

/* High DPI / Retina displays */
@media (-webkit-min-device-pixel-ratio: 2) {
  /* Sharper assets, thinner borders */
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  /* Disable animations, transitions duration: 0s */
  /* No parallax, no scroll animations */
}
```

---

## 8. IMPLEMENTATION GUIDE {#implementation-guide}

### Technology Stack Recommendations

#### Frontend Framework
- **Primary**: Framer (for rapid prototyping and animation capabilities)
- **Alternative**: React + Framer Motion (for more control)
- **Alternative**: Next.js + Tailwind CSS + Animated CSS (for SEO optimization)

#### Animation Libraries
- **Framer Motion**: Native scroll animations, gesture controls
- **GSAP**: Advanced timeline and scroll-trigger animations
- **Intersection Observer API**: For scroll-triggered animations (vanilla JS)

#### Styling Approach
- **CSS Variables**: For theming and responsive scaling
- **CSS Grid**: For layout systems
- **Flexbox**: For component-level alignment
- **Media Queries**: For responsive behavior
- **CSS Modules**: For scoped styling (optional)

### CSS Architecture

```css
/* Variables & Design Tokens */
:root {
  /* Colors */
  --color-bg-light: #f7f7f7;
  --color-bg-white: #ffffff;
  --color-text-primary: #000000;
  --color-accent: #fd5e46;
  --color-link: #0099ff;

  /* Typography */
  --font-primary: 'Geist', sans-serif;
  --font-secondary: 'Inter', sans-serif;
  --base-size: 12px;

  /* Spacing */
  --sp-xs: 4px;
  --sp-sm: 8px;
  --sp-md: 12px;
  --sp-lg: 24px;
  --sp-xl: 32px;
  --sp-2xl: 60px;
  --sp-3xl: 80px;

  /* Transitions */
  --transition-fast: 0.2s ease-in-out;
  --transition-base: 0.3s ease-in-out;
  --transition-slow: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Reset & Base Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: var(--base-size); }
body {
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
  background: var(--color-bg-light);
  line-height: 1.5;
}

/* Typography System */
h1 { font: 900 64px var(--font-primary); line-height: 1.2; }
h2 { font: 700 48px var(--font-primary); line-height: 1.2; }
h3 { font: 600 32px var(--font-primary); line-height: 1.2; }
p { font: 400 18px var(--font-secondary); line-height: 1.5; }

/* Navigation */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: var(--sp-xl) var(--sp-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: transparent;
}

/* Hero Section */
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 560px;
  color: white;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

/* Grid System */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--sp-md);
  padding: var(--sp-3xl) var(--sp-lg);
}

.grid-item {
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

.grid-item:hover img {
  transform: scale(1.05);
}

/* Responsive */
@media (min-width: 810px) and (max-width: 1199px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 809px) {
  .grid { grid-template-columns: 1fr; }
  nav { padding: var(--sp-lg) var(--sp-md); }
  h1 { font-size: 40px; }
}

/* Animations */
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

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Links */
a {
  color: var(--color-link);
  text-decoration: none;
  transition: all var(--transition-fast);
}

a:hover {
  text-decoration: underline;
  color: #0077cc;
}

/* Buttons */
.btn {
  padding: 16px 32px;
  border-radius: 8px;
  font-family: var(--font-secondary);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  border: none;
}

.btn-primary {
  background: var(--color-accent);
  color: white;
}

.btn-primary:hover {
  background: #ff6d57;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(253, 94, 70, 0.3);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### JavaScript Implementation Example

```javascript
// Scroll animations with Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Parallax effect on hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  }
});
```

### HTML Structure Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aestoria - Premium Interior Design</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;900&family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navigation -->
  <nav class="nav">
    <img src="logo.svg" alt="Aestoria" class="logo">
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="menu-toggle">☰</button>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <img src="hero-bg.jpg" alt="Luxury Interior" class="hero-bg">
    <div class="hero-content">
      <h1>Premium Interior Design</h1>
      <p>Crafting timeless spaces that inspire and elevate</p>
      <a href="#portfolio" class="btn btn-primary">Explore Portfolio</a>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="portfolio section" id="portfolio">
    <div class="container">
      <h2>Featured Projects</h2>
      <div class="grid">
        <div class="grid-item">
          <img src="project-1.jpg" alt="Project">
        </div>
        <!-- More items -->
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Aestoria</h3>
        <p>Premium interior design and architecture</p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>
```

### Performance Optimization Tips

1. **Image Optimization**
   - Use WebP format with fallbacks
   - Implement lazy loading with Intersection Observer
   - Use responsive images with `srcset`
   - Compress images (Tinypng, ImageOptim)

2. **CSS Optimization**
   - Minimize CSS file size
   - Use CSS variables for theming
   - Remove unused styles with PurgeCSS
   - Inline critical CSS

3. **Animation Performance**
   - Use `transform` and `opacity` for animations (GPU-accelerated)
   - Avoid animating `top`, `left`, `width`, `height`
   - Use `will-change` sparingly
   - Disable animations on reduced-motion preference

4. **Font Optimization**
   - Use `font-display: swap` for web fonts
   - Load only necessary font weights
   - Use system fonts as fallback
   - Implement font subsetting

5. **JavaScript Optimization**
   - Use event delegation
   - Debounce scroll events
   - Load scripts asynchronously
   - Minify and compress JavaScript

---

## QUICK REFERENCE CHECKLIST

### Design Elements
- [ ] Color palette implemented (5 main colors)
- [ ] Typography system in place (Geist + Inter)
- [ ] Spacing system defined (4px base unit)
- [ ] Border radius consistent (8-16px)
- [ ] Shadow system minimalist (subtle or none)

### Components
- [ ] Navigation (fixed, responsive)
- [ ] Hero section (100vh, overlay, split-screen)
- [ ] Grid layouts (4/2/1 column responsive)
- [ ] Project cards (rounded corners, hover animations)
- [ ] Case study sections (2-column layout)
- [ ] CTA buttons (coral accent color)
- [ ] Footer (dark background, organized columns)

### Animations
- [ ] Page load entrance animations
- [ ] Scroll-triggered section animations
- [ ] Hover effects on cards and links
- [ ] Smooth transitions (0.2-0.6s duration)
- [ ] Parallax effect on hero
- [ ] Reduced motion support

### Responsive
- [ ] Desktop (1200px+): Full featured
- [ ] Tablet (810-1199px): Modified layouts
- [ ] Mobile (≤809px): Single column, hamburger menu
- [ ] Responsive typography and spacing
- [ ] Touch-friendly interactive elements

### Performance
- [ ] Images optimized and lazy-loaded
- [ ] CSS minimized and organized
- [ ] JavaScript optimized and deferred
- [ ] Fonts optimized and preloaded
- [ ] Lighthouse score 90+

---

## ADDITIONAL NOTES

### Brand Psychology
- **Color**: Coral accent (#fd5e46) conveys energy and creativity
- **Cyan links** (#0099ff) add tech-forward modernity
- **Minimal design** communicates sophistication and trust
- **Large whitespace** projects premium positioning
- **Typography emphasis** (Geist bold headlines) creates impact

### User Experience Principles
1. **Clear Navigation**: Always accessible, intuitive
2. **Visual Hierarchy**: Guide users to important content
3. **Responsive Design**: Seamless across all devices
4. **Smooth Interactions**: Subtle animations enhance, not distract
5. **Accessibility**: Color contrast, font sizing, semantic HTML
6. **Performance**: Fast load times, optimized assets
7. **Content Focus**: Design supports content, not the reverse

---

**Document Version**: 1.0
**Last Updated**: 2026-02-05
**Suitable for Replication Level**: 100% LLM-Assisted Implementation
