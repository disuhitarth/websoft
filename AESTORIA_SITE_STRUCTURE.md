# AESTORIA - SITE STRUCTURE & VISUAL HIERARCHY MAP

## PAGE FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│                          HOMEPAGE FLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. NAVIGATION (Fixed Header)                                  │
│     ├─ Logo (left)                                            │
│     ├─ Menu Links (center/right)                              │
│     └─ Hamburger Toggle (mobile only)                         │
│                                                                 │
│  ↓ Scroll                                                       │
│                                                                 │
│  2. HERO SECTION (100vh)                                       │
│     ├─ Background Image (filtered)                            │
│     ├─ Dark Overlay (rgba 0,0,0,0.4)                          │
│     ├─ Headline (H1, 64px)                                    │
│     ├─ Subheading (Body, 18px)                                │
│     └─ CTA Button (Primary, coral)                            │
│                                                                 │
│  ↓ Scroll                                                       │
│                                                                 │
│  3. FEATURED PROJECTS (Grid, 4col → 2col → 1col)             │
│     ├─ Section Title (H2, centered)                           │
│     ├─ Project Card 1 (16:9 aspect)                           │
│     ├─ Project Card 2 (16:9 aspect)                           │
│     ├─ Project Card 3 (16:9 aspect)                           │
│     └─ Project Card 4 (16:9 aspect)                           │
│                                                                 │
│  ↓ Scroll                                                       │
│                                                                 │
│  4. PORTFOLIO/CASE STUDIES (2col → 1col)                      │
│     ├─ Section Title (H2, centered)                           │
│     ├─ Case Study 1 (Image 1.6:1 + Text)                      │
│     ├─ Case Study 2 (Image 1.6:1 + Text)                      │
│     └─ Case Study 3 (Image 1.6:1 + Text)                      │
│                                                                 │
│  ↓ Scroll                                                       │
│                                                                 │
│  5. SERVICES/OFFERINGS (Grid)                                  │
│     ├─ Section Title (H2)                                     │
│     ├─ Service Card 1 (Icon + Title + Desc)                   │
│     ├─ Service Card 2 (Icon + Title + Desc)                   │
│     └─ Service Card 3 (Icon + Title + Desc)                   │
│                                                                 │
│  ↓ Scroll                                                       │
│                                                                 │
│  6. CONTACT/CTA SECTION (Dark)                                │
│     ├─ Headline (H2, white)                                   │
│     ├─ Subheading (Body, white)                               │
│     └─ CTA Button (Primary, coral)                            │
│                                                                 │
│  ↓ Scroll                                                       │
│                                                                 │
│  7. FOOTER (Black Background)                                 │
│     ├─ Branding Column                                        │
│     ├─ Services Column                                        │
│     ├─ Company Column                                         │
│     ├─ Contact Column                                         │
│     └─ Footer Bottom (Copyright)                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## WIREFRAME LAYOUTS

### DESKTOP (1200px+) LAYOUT

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]                  [Nav Links]                    [☰]     │  Header (64px)
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     HERO SECTION (100vh)                        │
│  [Large Background Image]                                       │
│  [Dark Overlay]                                                 │
│  [H1 Headline 64px]                                             │
│  [P Subheading 18px]                                            │
│  [CTA Button]                                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│         FEATURED PROJECTS (4-Column Grid)                       │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ Project  │  │ Project  │  │ Project  │  │ Project  │        │
│  │    1     │  │    2     │  │    3     │  │    4     │        │
│  │ 16:9     │  │ 16:9     │  │ 16:9     │  │ 16:9     │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│  12px gap                                                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              CASE STUDY SECTION (2-Column)                      │
│  80px gap                                                       │
│                                                                 │
│  ┌──────────────┐                    ┌──────────────────┐     │
│  │   Image      │                    │ H2 Title         │     │
│  │   600px h    │  80px gap          │ Meta Info        │     │
│  │   1.6 ratio  │ ──────────────────▶│ P Description    │     │
│  │   rounded    │                    │ H3 Challenge     │     │
│  └──────────────┘                    │ P Challenge txt  │     │
│                                       │ H3 Solution      │     │
│                                       │ P Solution txt   │     │
│                                       │ [Button]         │     │
│                                       └──────────────────┘     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    SERVICES SECTION                             │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                      │
│  │ Service  │  │ Service  │  │ Service  │                      │
│  │    1     │  │    2     │  │    3     │                      │
│  │Icon+Text │  │Icon+Text │  │Icon+Text │                      │
│  └──────────┘  └──────────┘  └──────────┘                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│            CONTACT SECTION (Dark Background)                    │
│            H2 Headline                                          │
│            P Subheading                                         │
│            [CTA Button]                                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER (Black Background)                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │ Brand   │  │Services │  │ Company │  │ Contact │           │
│  │  Info   │  │  Links  │  │  Links  │  │  Info   │           │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
│  ────────────────────────────────────────────────────────────  │
│                     Copyright Info                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### TABLET (810-1199px) LAYOUT

```
┌────────────────────────────────────────┐
│ [Logo]        [Nav or ☰]               │  Header (60px)
├────────────────────────────────────────┤
│                                        │
│       HERO SECTION (100vh)             │
│    [Background Image]                  │
│    [H1 48px]                           │
│    [P 16px]                            │
│    [CTA Button]                        │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  FEATURED PROJECTS (2-3 Column Grid)   │
│                                        │
│  ┌──────────┐  ┌──────────┐           │
│  │ Project  │  │ Project  │           │
│  │    1     │  │    2     │           │
│  └──────────┘  └──────────┘           │
│  ┌──────────┐  ┌──────────┐           │
│  │ Project  │  │ Project  │           │
│  │    3     │  │    4     │           │
│  └──────────┘  └──────────┘           │
│                                        │
├────────────────────────────────────────┤
│                                        │
│    CASE STUDY (Single Column)          │
│                                        │
│    ┌─────────────────┐                 │
│    │ Image 400px h   │                 │
│    │ 60px gap        │                 │
│    └─────────────────┘                 │
│    H2 Title                            │
│    Meta, Challenge, Solution, Results  │
│    [Button]                            │
│                                        │
├────────────────────────────────────────┤
│    SERVICES (2 Column Grid)            │
│    ┌──────────┐ ┌──────────┐          │
│    │Service 1 │ │Service 2 │          │
│    └──────────┘ └──────────┘          │
│    ┌──────────┐                        │
│    │Service 3 │                        │
│    └──────────┘                        │
│                                        │
├────────────────────────────────────────┤
│  CONTACT (Dark)                        │
│  H2, Subheading, [Button]              │
│                                        │
├────────────────────────────────────────┤
│  FOOTER (2 Columns)                    │
│  ┌──────────┐  ┌──────────┐           │
│  │Column 1  │  │Column 2  │           │
│  │Column 3  │  │Column 4  │           │
│  └──────────┘  └──────────┘           │
│  Copyright                             │
│                                        │
└────────────────────────────────────────┘
```

### MOBILE (≤809px) LAYOUT

```
┌──────────────────────────┐
│ [Logo]          [☰]      │  Header (56px)
├──────────────────────────┤
│   [Navigation Drawer]    │  Open on hamburger click
│   - About                │
│   - Portfolio            │
│   - Services             │
│   - Contact              │
│                          │
├──────────────────────────┤
│                          │
│  HERO (100vh)            │
│  [Background Image]      │
│  [H1 40px]               │
│  [P 15px]                │
│  [CTA Button]            │
│                          │
├──────────────────────────┤
│                          │
│ PROJECTS (1 Column)      │
│ ┌────────────────────┐   │
│ │ Project 1          │   │
│ │ 16:9 aspect        │   │
│ └────────────────────┘   │
│ ┌────────────────────┐   │
│ │ Project 2          │   │
│ └────────────────────┘   │
│ ┌────────────────────┐   │
│ │ Project 3          │   │
│ └────────────────────┘   │
│ ┌────────────────────┐   │
│ │ Project 4          │   │
│ └────────────────────┘   │
│                          │
├──────────────────────────┤
│                          │
│ CASE STUDY (Stacked)     │
│ ┌────────────────────┐   │
│ │ Image 300px h      │   │
│ │ Full width         │   │
│ └────────────────────┘   │
│ H2 Title (28px)          │
│ Meta Info                │
│ Description              │
│ Challenge section        │
│ Solution section         │
│ Results section          │
│ [Button]                 │
│                          │
├──────────────────────────┤
│ SERVICES (1 Column)      │
│ ┌────────────────────┐   │
│ │ Service 1          │   │
│ │ Icon + Text        │   │
│ └────────────────────┘   │
│ ┌────────────────────┐   │
│ │ Service 2          │   │
│ └────────────────────┘   │
│ ┌────────────────────┐   │
│ │ Service 3          │   │
│ └────────────────────┘   │
│                          │
├──────────────────────────┤
│ CONTACT (Dark, Centered) │
│ H2 (28px)                │
│ Subheading               │
│ [CTA Button Full Width]  │
│                          │
├──────────────────────────┤
│ FOOTER (Single Column)   │
│ Brand Section            │
│ Services Links           │
│ Company Links            │
│ Contact Info             │
│ Social Links             │
│ Copyright                │
│                          │
└──────────────────────────┘
```

---

## COMPONENT HIERARCHY MAP

```
App (Root)
│
├─ Navigation (Fixed Header)
│  ├─ Logo
│  ├─ NavMenu (Desktop)
│  │  ├─ NavLink: About
│  │  ├─ NavLink: Portfolio
│  │  ├─ NavLink: Services
│  │  └─ NavLink: Contact
│  ├─ Hamburger (Mobile)
│  └─ NavDrawer (Mobile Only)
│     ├─ NavLink: About
│     ├─ NavLink: Portfolio
│     ├─ NavLink: Services
│     └─ NavLink: Contact
│
├─ Hero Section
│  ├─ Background Image
│  ├─ Overlay (Dark)
│  ├─ HeroContent
│  │  ├─ H1: Title
│  │  ├─ P: Subtitle
│  │  └─ Button (Primary)
│  └─ ScrollIndicator
│
├─ Portfolio Grid Section
│  ├─ SectionTitle (H2)
│  ├─ GridContainer
│  │  ├─ GridItem (Card)
│  │  │  ├─ Image
│  │  │  ├─ Overlay
│  │  │  ├─ H3: Title
│  │  │  └─ P: Description
│  │  ├─ GridItem
│  │  ├─ GridItem
│  │  └─ GridItem
│
├─ Case Studies Section
│  ├─ SectionTitle (H2)
│  ├─ CaseStudy (Repeated)
│  │  ├─ CaseImage
│  │  │  └─ Image (600px height)
│  │  └─ CaseContent
│  │     ├─ MetaInfo (Category, Year, Client)
│  │     ├─ H2: Project Title
│  │     ├─ P: Introduction
│  │     ├─ ChallengeSection
│  │     │  ├─ H3: Challenge
│  │     │  └─ P: Description
│  │     ├─ SolutionSection
│  │     │  ├─ H3: Solution
│  │     │  └─ P: Description
│  │     ├─ ResultsSection
│  │     │  ├─ H3: Results
│  │     │  └─ List
│  │     └─ Button (Outline)
│
├─ Services Section
│  ├─ SectionTitle (H2)
│  ├─ ServiceGrid
│  │  ├─ ServiceCard
│  │  │  ├─ Icon
│  │  │  ├─ H3: Title
│  │  │  └─ P: Description
│  │  ├─ ServiceCard
│  │  └─ ServiceCard
│
├─ Contact Section
│  ├─ Background (Dark)
│  ├─ H2: Headline
│  ├─ P: Subheading
│  └─ Button (Primary)
│
└─ Footer
   ├─ FooterContainer
   │  ├─ BrandColumn
   │  │  ├─ H4: Title
   │  │  ├─ P: Description
   │  │  └─ SocialLinks
   │  ├─ ServicesColumn
   │  │  ├─ H4: Title
   │  │  └─ NavList
   │  ├─ CompanyColumn
   │  │  ├─ H4: Title
   │  │  └─ NavList
   │  └─ ContactColumn
   │     ├─ H4: Title
   │     ├─ P: Email
   │     ├─ P: Phone
   │     └─ P: Address
   └─ FooterBottom
      └─ P: Copyright
```

---

## CONTENT FLOW & WORD COUNT ESTIMATES

### Section-by-Section Breakdown

| Section | Headline | Body Copy | CTAs | Est. Words |
|---------|----------|-----------|------|------------|
| Hero | 1 | 1 subtitle | 1 button | 20-30 |
| Portfolio Grid | 1 title | 4× (title + desc) | 0 | 40-60 |
| Case Study 1 | 1 | Intro + Challenge + Solution + Results | 1 button | 200-300 |
| Case Study 2 | 1 | Intro + Challenge + Solution + Results | 1 button | 200-300 |
| Case Study 3 | 1 | Intro + Challenge + Solution + Results | 1 button | 200-300 |
| Services | 1 title | 3× (title + desc) | 0 | 80-120 |
| Contact | 1 | 1 subheading | 1 button | 20-30 |
| Footer | 4 titles | Nav lists + contact | Links | 100-150 |
| **TOTAL** | | | | **~900-1400 words** |

---

## VISUAL HIERARCHY PYRAMID

```
                           ┌──────────┐
                           │    H1    │  Hero Headline 64px
                           │  900 Wgt │  Primary Focus
                           └──────────┘
                                │
                           ┌────────────┐
                           │     H2     │  Section Titles 48px
                           │   700 Wgt  │  Secondary Focus
                           └────────────┘
                                │
                        ┌────────────────┐
                        │      H3        │  Subsection Titles 32px
                        │    600 Wgt     │  Tertiary Focus
                        └────────────────┘
                                │
                        ┌────────────────┐
                        │    Body Text   │  Main Content 16px
                        │    400 Wgt     │  Reading Content
                        └────────────────┘
                                │
                        ┌────────────────┐
                        │  Small Text    │  Secondary Info 14px
                        │    400 Wgt     │  Supporting Details
                        └────────────────┘
```

---

## COLOR APPLICATION MAP

```
                        ┌─────────────────┐
                        │   Off-White     │  Primary backgrounds
                        │   #f7f7f7       │  Light, minimal feel
                        └─────────────────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
        ┌──────────────┐  ┌──────────────┐  ┌─────────────┐
        │  Pure White  │  │ Deep Black   │  │   Coral     │
        │  #ffffff     │  │  #000000     │  │  #fd5e46    │
        │ Cards, UI    │  │ Text, footer │  │ Primary CTAs│
        └──────────────┘  └──────────────┘  └─────────────┘
                │               │                   │
                │               │          ┌────────┴────────┐
                │               │          │                 │
        ┌───────────────┐  ┌──────────────┐  ┌─────────────┐
        │  Secondary   │  │   Overlays   │  │  Hover      │
        │  States      │  │  rgba        │  │  #ff6d57    │
        │  Neutral     │  │  (0,0,0,0.4) │  │  Lighter    │
        └───────────────┘  └──────────────┘  └─────────────┘
                                                     │
                                             ┌───────────────┐
                                             │  Cyan Links   │
                                             │  #0099ff      │
                                             │  Interactive  │
                                             └───────────────┘
```

---

## SPACING RHYTHM MAP

```
Section Padding (Vertical)
         80px (Desktop)
            │
            ├─ 60px (Tablet)
            │   │
            │   └─ 40px (Mobile)
            │
    Content Gap (Inside sections)
            │
            ├─ 80px (Desktop columns)
            │   │
            │   ├─ 60px (Tablet)
            │   │
            │   └─ 24px (Mobile)
            │
    Element Spacing (Local)
            │
            ├─ 32px (Between subsections)
            │   │
            │   ├─ 24px (Tablet)
            │   │
            │   └─ 16px (Mobile)
            │
    Component Gap (Grid/List)
            │
            └─ 12px (Consistent across all)
```

---

## INTERACTION STATE FLOWCHART

```
                        ┌─────────────┐
                        │  Page Load  │
                        └────────┬────┘
                                 │
                    ┌────────────┴────────────┐
                    │                        │
            ┌───────────────┐        ┌────────────────┐
            │ Animations    │        │ Navigation    │
            │ Fade-in + up  │        │ Ready         │
            └───────┬───────┘        └────┬───────────┘
                    │                     │
                    └─────────────┬───────┘
                                  │
                        ┌─────────────────┐
                        │ User Interacts  │
                        └────────┬────────┘
                                 │
                 ┌───────────────┼───────────────┐
                 │               │               │
            ┌─────────┐     ┌──────────┐   ┌────────────┐
            │ Hover   │     │ Scroll   │   │Click/Touch │
            │ Card    │     │Down      │   │Link/Button │
            └────┬────┘     └────┬─────┘   └─────┬──────┘
                 │               │              │
         ┌───────────────┐  ┌──────────────┐   │
         │Image Scale    │  │Animations    │   │
         │Overlay Fade   │  │Stagger-in    │   │
         │0.4s ease-out  │  │0.6s ease-out │   │
         └───────────────┘  └──────────────┘   │
                                               │
                                    ┌──────────┴────┐
                                    │               │
                            ┌──────────────┐  ┌─────────────┐
                            │Smooth Scroll │  │Color Change │
                            │To Section    │  │ + Underline │
                            │0.3s ease     │  │ 0.2s ease   │
                            └──────────────┘  └─────────────┘
```

---

## ANIMATION TIMELINE

```
Page Load Sequence (First 1 second)
│
├─ 0ms: Page renders
│
├─ 100ms: Nav fade-in
│  └─ Duration: 300ms
│
├─ 150ms: Hero background fade-in
│  └─ Duration: 800ms
│
├─ 200ms: H1 headline fade-in + slide up
│  └─ Duration: 600ms, Easing: ease-out
│
├─ 300ms: Subheading fade-in + slide up
│  └─ Duration: 600ms, Easing: ease-out, Delay: 100ms
│
├─ 400ms: CTA button scale-in
│  └─ Duration: 600ms, Easing: ease-out, Delay: 200ms
│
└─ 1000ms: All animations complete, page interactive


Scroll Animation Sequence (On scroll into view)
│
├─ Item 1: Fade-in + slide up (Delay: 0ms)
├─ Item 2: Fade-in + slide up (Delay: 100ms)
├─ Item 3: Fade-in + slide up (Delay: 200ms)
└─ Item 4: Fade-in + slide up (Delay: 300ms)

Duration: 500ms each, Easing: ease-out


Hover Animation Sequence (On mouse enter)
│
├─ 0ms: Image scale starts
├─ 0ms: Overlay opacity starts
├─ 0ms: Content transform starts
│
└─ 400ms: All complete

Duration: 0.3-0.4s, Easing: ease-out
```

---

## BREAKPOINT ADAPTATION FLOW

```
                    ┌──────────────────┐
                    │  Content Width   │
                    └────────┬─────────┘
                             │
                ┌────────────┴────────────┐
                │                        │
         ┌────────────────┐      ┌────────────────┐
         │  Desktop       │      │  Mobile        │
         │  1200px+       │      │  ≤809px        │
         │  Max: 1480px   │      │  100% - padding│
         └────────┬───────┘      └────────┬───────┘
                  │                      │
         ┌────────────────┐      ┌────────────────┐
         │  Grid Columns  │      │  Grid Columns  │
         │  4 columns     │      │  1 column      │
         │  4-col CSS     │      │  Single stack  │
         └────────┬───────┘      └────────┬───────┘
                  │                      │
         ┌────────────────┐      ┌────────────────┐
         │  Padding       │      │  Padding       │
         │  32px          │      │  20px          │
         │  Spacing: 80px │      │  Spacing: 24px │
         └────────┬───────┘      └────────┬───────┘
                  │                      │
         ┌────────────────┐      ┌────────────────┐
         │  Typography    │      │  Typography    │
         │  Full scale    │      │  -10% reduction│
         │  H1: 64px      │      │  H1: 40px      │
         └────────────────┘      └────────────────┘
```

---

## NAVIGATION INTERACTION MAP

```
                    ┌─────────────────┐
                    │  Viewport Size  │
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │                │
            ┌──────────────┐   ┌──────────────┐
            │ Desktop      │   │ Mobile       │
            │ 1200px+      │   │ ≤809px       │
            └───────┬──────┘   └───────┬──────┘
                    │                 │
           ┌────────────────┐   ┌─────────────────┐
           │ Horizontal Nav │   │ Hamburger Menu  │
           │ Links: Visible │   │ Links: Hidden   │
           │ No Drawer      │   │ Drawer: Closed  │
           └────────┬───────┘   └────────┬────────┘
                    │                    │
          ┌─────────────────┐   ┌────────────────────┐
          │ User Hovers     │   │ User Clicks ☰      │
          │ Link            │   │                    │
          └────────┬────────┘   └────────┬───────────┘
                   │                     │
          ┌────────────────┐   ┌─────────────────────┐
          │ Color: #0099ff │   │ Drawer Slides In    │
          │ Underline      │   │ Position: absolute  │
          │ 0.2s ease-in   │   │ Z-index: 99         │
          └────────────────┘   │ Width: 100%         │
                               │ Animation: 0.3s     │
                               └──────────┬──────────┘
                                          │
                               ┌──────────────────────┐
                               │ User Clicks Link     │
                               │ in Drawer            │
                               └──────────┬───────────┘
                                          │
                               ┌──────────────────────┐
                               │ Drawer Slides Out    │
                               │ Navigate to Section  │
                               │ Smooth Scroll: 0.3s  │
                               └──────────────────────┘
```

---

## PERFORMANCE OPTIMIZATION FLOW

```
                    ┌──────────────────┐
                    │   Page Request   │
                    └────────┬─────────┘
                             │
                    ┌────────────────────┐
                    │ Load HTML         │
                    │ (Minified)        │
                    └────────┬──────────┘
                             │
            ┌────────────────┴─────────────────┐
            │                                  │
       ┌─────────────┐                  ┌────────────┐
       │ Load CSS    │                  │Load Fonts  │
       │ Async       │                  │Preload     │
       │ < 50KB      │                  │Display:    │
       └─────┬───────┘                  │Swap        │
             │                          └─────┬──────┘
             │                                │
             └────────────────┬───────────────┘
                              │
                     ┌────────────────┐
                     │ Render & Paint │
                     │ (FCP < 1.5s)   │
                     └────────┬───────┘
                              │
                  ┌───────────┴───────────┐
                  │                      │
             ┌─────────────┐        ┌──────────┐
             │ Load Images │        │Load JS   │
             │ Lazy-load   │        │Defer     │
             │ WebP        │        │< 150KB   │
             └─────────────┘        └──────────┘
                  │                      │
                  └───────────┬──────────┘
                              │
                     ┌────────────────┐
                     │ Interactive    │
                     │ (TTI < 3.5s)   │
                     └────────────────┘
```

---

**Site Structure Map Version**: 1.0
**Created**: 2026-02-05
**Use For**: Visual reference, team communication, flow documentation
