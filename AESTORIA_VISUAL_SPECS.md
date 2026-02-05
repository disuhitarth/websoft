# AESTORIA - VISUAL SPECIFICATIONS & MEASUREMENTS

## QUICK REFERENCE DIMENSIONS

### Container Widths
```
Max Content Width:     1480px
Standard Container:    1200px
Tablet Container:      900px
Mobile Container:      100% - 40px padding
```

### Heights
```
Hero Section:          100vh (full viewport)
Featured Grid Item:    400-600px (aspect ratio 16:9)
Case Study Image:      600px
Portfolio Card:        500px
Navigation Height:     64px (32px padding top + bottom)
```

### Spacing Grid (4px Base Unit)
```
4px   = 1 unit  (xs)
8px   = 2 units (s)
12px  = 3 units (m)
16px  = 4 units
24px  = 6 units (l)
32px  = 8 units (xl)
40px  = 10 units
48px  = 12 units
60px  = 15 units (xxl)
80px  = 20 units (xxxl)
100px = 25 units (4xl)
```

### Border Radius
```
Small Elements:    6-8px (buttons, inputs)
Cards:             12-16px (project cards)
Large Sections:    20px (hero images - optional)
Buttons:           8px (standard)
Images:            12px (case study images)
```

### Shadows
```
Minimal/No shadows used
When needed:
  Hover card:     0 12px 32px rgba(0,0,0,0.15)
  Button hover:   0 8px 24px rgba(253,94,70,0.3)
  Overlay:        None (use transparent overlays instead)
```

---

## COLOR SPECIFICATIONS

### Primary Colors
| Name | Hex | RGB | Usage | Notes |
|------|-----|-----|-------|-------|
| Off-White | #f7f7f7 | 247,247,247 | Page background | Primary neutral |
| Pure White | #ffffff | 255,255,255 | Card backgrounds | Secondary neutral |
| Deep Black | #000000 | 0,0,0 | Text, dark backgrounds | Primary text color |
| Coral/Accent | #fd5e46 | 253,94,70 | Primary CTAs, highlights | Main brand accent |
| Cyan/Link | #0099ff | 0,153,255 | Links, secondary CTAs | Interaction color |

### Dark Overlays
```
Standard:    rgba(0, 0, 0, 0.4)    [40% opacity]
Subtle:      rgba(0, 0, 0, 0.2)    [20% opacity]
Strong:      rgba(0, 0, 0, 0.6)    [60% opacity]
```

### Hover/Interactive Colors
```
Coral Hover:       #ff6d57 (lighter, +16 RGB)
Cyan Hover:        #0077cc (darker, -26 RGB)
Text Selection:    #fd5e46 with 0.3 opacity
Link Hover:        #0099ff with underline
```

---

## TYPOGRAPHY SPECIFICATIONS

### Font Downloads
```
Google Fonts:
- Geist: https://fonts.google.com/specimen/Geist
- Inter: https://fonts.google.com/specimen/Inter
```

### Font Stack (CSS)
```css
--font-primary: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Heading Scale (Desktop)
```
H1:  font-size: 64px;  font-weight: 900;  line-height: 1.2;  letter-spacing: -0.02em;
H2:  font-size: 48px;  font-weight: 700;  line-height: 1.2;  letter-spacing: -0.01em;
H3:  font-size: 32px;  font-weight: 600;  line-height: 1.2;  letter-spacing: 0;
H4:  font-size: 24px;  font-weight: 600;  line-height: 1.3;  letter-spacing: 0;
H5:  font-size: 20px;  font-weight: 600;  line-height: 1.3;  letter-spacing: 0;
H6:  font-size: 16px;  font-weight: 600;  line-height: 1.4;  letter-spacing: 0;
```

### Body Text Scale (Desktop)
```
Large:      font-size: 18px;  font-weight: 400;  line-height: 1.5;
Regular:    font-size: 16px;  font-weight: 400;  line-height: 1.5;
Small:      font-size: 14px;  font-weight: 400;  line-height: 1.4;
XSmall:     font-size: 12px;  font-weight: 400;  line-height: 1.4;
```

### Emphasis Variations
```
Bold Text:     font-weight: 600 or 700
Extra Bold:    font-weight: 900
Italic:        font-style: italic; (with italic font variant)
Underline:     text-decoration: underline; color: #0099ff;
```

### Responsive Typography (Scaling)
```
Desktop  →  Tablet   →  Mobile
64px     →  48px     →  40px    (H1)
48px     →  36px     →  28px    (H2)
32px     →  24px     →  20px    (H3)
18px     →  16px     →  15px    (Body Large)
16px     →  15px     →  14px    (Body Regular)
14px     →  13px     →  12px    (Body Small)
```

---

## COMPONENT DIMENSIONS

### Navigation Component
```
Height:           64px (including padding)
Top Padding:      32px
Bottom Padding:    32px
Side Padding:      32px (desktop), 24px (tablet), 20px (mobile)
Logo Width:        99px
Logo Height:       22px
Link Font Size:    16px (desktop), 14px (tablet), 12px (mobile)
Link Gap:          10px
Menu Toggle:       32×32px button
```

### Hero Section
```
Height:            100vh
Padding:           80px 32px (desktop)
Content Max-Width: 560px
Headline Size:     64px
Subheading Size:   18px
Button Padding:    16px 32px
Button Font Size:  16px
Overlay Opacity:   0.4 (40%)
```

### Grid Container
```
Max Width:         1480px
Padding:           80px 32px
Columns (Desktop): 4
Columns (Tablet):  2-3
Columns (Mobile):  1
Gap:               12px (consistent)
Item Aspect Ratio: 16:9 or 1:1
Item Height:       400-500px
Border Radius:     16px
```

### Project Card
```
Width:             Variable (grid-based)
Height:            400-600px (aspect ratio driven)
Padding:           0 (image fills container)
Border Radius:     16px
Image Overlay:     rgba(0,0,0,0.3) on hover
Text Position:     Bottom absolute, 24px padding
Text Background:   Linear gradient (transparent to black)
Hover Effect:      Image scale 1.05, overlay opacity 0→0.3
```

### Case Study Section
```
Max Width:         1480px
Padding:           80px 32px (desktop), 60px 24px (tablet), 40px 20px (mobile)
Layout:            2-column (1.6:1 ratio on desktop)
Image Height:      600px
Image Width:       Flex 1.6
Text Width:        Flex 1
Gap:               80px (desktop), 60px (tablet), 24px (mobile)
Text Max-Width:    800px
Section Gap:       32px between subsections
```

### Button Styles
```
Primary Button:
  Background:   #fd5e46
  Color:        #ffffff
  Padding:      16px 32px
  Border:       None
  Border-Radius: 8px
  Font Weight:  600
  Font Size:    16px
  Hover Height: +2px (transform: translateY(-2px))
  Shadow Hover: 0 8px 24px rgba(253,94,70,0.3)

Text Link:
  Background:   None
  Color:        #0099ff
  Padding:      None
  Border:       None
  Underline:    None (appears on hover)
  Font Weight:  400
  Font Size:    16px

Outline Button:
  Background:   Transparent
  Color:        #0099ff
  Border:       2px solid #0099ff
  Padding:      12px 24px
  Border-Radius: 6px
```

### Form Elements
```
Input Height:      40px
Input Padding:     12px 16px
Input Border:      1px solid #cccccc
Input Radius:      6px
Input Font:        Inter 16px
Focus Border:      2px solid #0099ff
Focus Shadow:      0 0 0 3px rgba(0,153,255,0.1)
Placeholder Color: #999999
```

### Footer
```
Background:    #000000
Padding:       80px 32px vertical, 60px horizontal
Column Gap:    60px
Row Gap:       40px
Text Color:    #ffffff
Link Color:    #0099ff
Font Size:     14-16px
Section Title: 14px, weight 600
```

---

## ANIMATION SPECIFICATIONS

### Transition Timing
```
Micro-interaction:    0.2s ease-in-out (for quick feedback)
Standard Transition:  0.3s ease-in-out (hover states)
Section Animation:    0.6s cubic-bezier(0.34, 1.56, 0.64, 1) (entrance)
Slow Animation:       0.8s ease-out (complex animations)
```

### Easing Functions
```
Fast:                 ease-in-out
Standard:             ease-in-out
Bounce/Overshoot:     cubic-bezier(0.34, 1.56, 0.64, 1)
Smooth:               ease-out
Linear (parallax):    linear (no easing)
```

### Scroll Animation Triggers
```
Viewport Visibility: 80-100% in view
Trigger Point:       10% above bottom of viewport
Stagger Delay:       0.1-0.15s per item
Duration:            0.5-0.8s per item
```

### Parallax Configuration
```
Hero Image:
  Speed Multiplier: 0.5 (half scroll speed)
  Formula:          translateY(scrollY * 0.5)
  Type:            Continuous (not step-based)
```

### Hover Animation Details
```
Card Hover:
  Image Scale:      scale(1.05)
  Overlay Add:      opacity 0→0.3
  Duration:         0.4s
  Easing:           ease-out

Link Hover:
  Color Change:     #000000→#0099ff (text links)
  Underline:        Appears
  Duration:         0.2s
  Easing:           ease-in-out

Button Hover:
  Background:       Lighter shade
  Transform:        translateY(-2px) [lift effect]
  Shadow:           Add 0 8px 24px shadow
  Duration:         0.3s
  Easing:           cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Loading State Animation
```
Spinner:
  Size:            32×32px
  Color:           #fd5e46
  Animation:       360° rotation
  Duration:        1s
  Iteration:       Infinite
  Easing:          Linear
  Stroke Width:    3px
```

---

## RESPONSIVE BREAKPOINTS

### Breakpoint System
```
Mobile:      0px - 809px
Tablet:      810px - 1199px
Desktop:     1200px - ∞
```

### Mobile Adjustments (0-809px)
```
Font Sizes:       -10% to -15%
Padding:          20px (was 32px)
Spacing:          Reduced by 20%
Grid Columns:     1 (all)
Sidebar:          Hidden (hamburger menu)
Images:           100% width
Button Size:      Slightly larger (48px min height for touch)
Navigation:       Drawer/overlay menu
```

### Tablet Adjustments (810-1199px)
```
Font Sizes:       -5% to -10%
Padding:          24px (was 32px)
Grid Columns:     2-3 (was 4)
Case Studies:     Stack to 1-column at lower range
Images:           Larger on screen
Gap:              40px (was 60-80px)
Navigation:       Visible (if space allows)
```

### Desktop (1200px+)
```
Font Sizes:       100% (base scale)
Padding:          32px standard
Grid Columns:     4 (full grid)
Case Studies:     2-column layout
Max Widths:       1480px for content
Gap:              60-80px
Navigation:       Full horizontal menu
Sidebars:         Visible
```

---

## IMAGE SPECIFICATIONS

### Image Aspect Ratios
```
Hero Section:      16:9 (1920×1080 minimum)
Project Grid:      16:9 or 1:1 (flexible)
Case Study:        4:3 or 16:9
Portfolio Cards:   16:9 preferred
Featured Image:    16:9
Thumbnail:         1:1 or 3:2
Logo:              4.5:1 (99×22px)
```

### Image Optimization
```
Format:            WebP with fallback to JPG/PNG
Compression:       80% quality (JPEG), 80-90% PNG
Responsive:        Generate 2x for Retina displays
Sizes:
  Small:  640px
  Medium: 1024px
  Large:  1920px
  2x:     Multiply by 2
```

### Image Filters
```
Hero Background:
  filter: saturate(1.5) brightness(0.8) ...;
  Saturation: 150%
  Brightness: 80% (dark)

Card Image Hover:
  filter: brightness(1.1);
  Brightness: 110% (slightly lighter on hover)
```

---

## ACCESSIBILITY SPECIFICATIONS

### Color Contrast
```
Text vs Background:    Minimum 4.5:1 (WCAG AA)
UI Components:         Minimum 3:1 (WCAG AA)
Focus Indicators:      3px solid #0099ff
Focus Offset:          2-3px from element
```

### Touch Targets
```
Minimum Size:   48×48px (mobile)
Minimum Gap:    8px between touch targets
Button Height:  40-48px (minimum)
Link Padding:   8px (padding around link text)
```

### Motion & Seizure Prevention
```
Respect prefers-reduced-motion:
  Disable all animations if enabled
  Transition duration: 0s
  Animation: none
```

### Semantic HTML
```
Use <header>, <nav>, <main>, <section>, <footer>
Links: Use <a> tags with href
Buttons: Use <button> tags
Form: Use proper <form>, <label>, <input> structure
Headings: Proper hierarchy (H1→H2→H3, skip no levels)
```

---

## PERFORMANCE TARGETS

### Load Performance
```
First Contentful Paint:      < 1.5s
Largest Contentful Paint:    < 2.5s
Cumulative Layout Shift:     < 0.1
Time to Interactive:         < 3.5s
```

### File Size Targets
```
CSS:              < 50KB (minified)
JavaScript:       < 150KB (minified)
Hero Image:       < 500KB (optimized)
Grid Images:      < 200KB each (optimized)
Total:            < 2MB per page
```

### Optimization Techniques
```
Lazy Load:         Images below fold
Code Split:        Load JS on-demand
Image Format:      WebP + fallback
Minify:            CSS, JS, HTML
Compress:          GZIP all assets
Cache:             Browser cache headers
CDN:               Serve from nearest location
```

---

## BROWSER SUPPORT

### Minimum Requirements
```
Chrome:           Latest 2 versions
Firefox:          Latest 2 versions
Safari:           Latest 2 versions
Edge:             Latest 2 versions
iOS Safari:       Latest 2 versions
Chrome Mobile:    Latest 2 versions
```

### Feature Support
```
CSS Grid:         All modern browsers
Flexbox:          All modern browsers
CSS Variables:    All modern browsers (IE not supported)
Intersection Observer: All except IE
Web Fonts:        All modern browsers
```

### Fallbacks
```
CSS Grid → Flexbox (for IE)
CSS Variables → Fallback colors
WebP → JPG fallback
Modern JS → Babel transpilation
```

---

## IMPLEMENTATION CHECKLIST

### Measurements
- [ ] Container widths configured (1480px max)
- [ ] Spacing grid established (4px base)
- [ ] Font sizing scale defined
- [ ] Breakpoints implemented (809px, 1200px)
- [ ] Border radius consistent (6-16px)

### Colors
- [ ] 5 main colors implemented
- [ ] Hover states defined
- [ ] Overlay colors set
- [ ] Contrast ratios verified (4.5:1 minimum)

### Typography
- [ ] Geist font loaded (weights: 400-900)
- [ ] Inter font loaded (weights: 400-900)
- [ ] Font display: swap configured
- [ ] All sizes and weights tested

### Components
- [ ] Navigation built and responsive
- [ ] Hero section implemented
- [ ] Grid layouts functional
- [ ] Project cards interactive
- [ ] Case study layouts correct
- [ ] Buttons styled (all variants)
- [ ] Forms accessible
- [ ] Footer complete

### Animations
- [ ] Scroll triggers functional
- [ ] Hover states smooth
- [ ] Entrance animations present
- [ ] Transitions optimized (GPU)
- [ ] Reduced motion respected
- [ ] No jank or stuttering

### Responsive
- [ ] Mobile layout (≤809px) tested
- [ ] Tablet layout (810-1199px) tested
- [ ] Desktop layout (1200px+) tested
- [ ] All orientations work
- [ ] Touch targets adequate
- [ ] Text readable on all sizes

### Performance
- [ ] Images optimized and lazy-loaded
- [ ] CSS minified and critical CSS inlined
- [ ] JavaScript deferred/async
- [ ] Fonts preloaded and optimized
- [ ] Lighthouse score ≥90
- [ ] Mobile score ≥85

### Accessibility
- [ ] Semantic HTML used
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Color contrast verified
- [ ] Screen reader tested
- [ ] Form labels present

---

**Specification Document Version**: 1.0
**Created**: 2026-02-05
**Suitable for**: Designer-to-Developer handoff, LLM-assisted development, design system reference
