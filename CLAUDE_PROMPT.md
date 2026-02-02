# Aurelian Air Landing Page - Complete Development Prompt

## PROJECT OVERVIEW

Build a single-page, ultra-premium landing page for "Aurelian Air" - a private aviation company. This should feel like a flagship private aviation brand (Bombardier/Gulfstream level), not a startup or travel blog.

**Core Principle**: Discreet, ultra-premium, calm, authoritative. Built for high-net-worth clients who value certainty over flash.

---

## DESIGN PHILOSOPHY

### Tone & Feel
- Ultra-premium
- Calm, controlled, confident
- Quiet luxury / old-money energy
- No hype, no emojis, no buzzwords
- Minimal words, lots of whitespace
- Feels expensive and inevitable
- Short, declarative, confident copy
- Written for executives, not social media

### Color Palette
- Matte black background (#0a0a0a)
- Charcoal (#1a1a1a) and graphite (#2a2a2a) greys
- Soft off-white text (#f5f5f0)
- Subtle warm gold accent (#d4af37, #e5c158) - minimal use
- No bright colors
- No gradients except very subtle dark overlays
- High contrast but easy on the eyes

### Typography
- Primary font: Cormorant Garamond (elegant serif) for headings
- Secondary font: Inter (modern sans-serif) for body text
- Large headings with tight letter spacing
- Strong hierarchy
- Minimal font weights (300-500)

---

## IMAGE REQUIREMENTS (CRITICAL)

### Image Style Rules (Non-Negotiable)
- Dark / moody
- Editorial quality, not stocky
- No faces
- No smiling people
- No commercial planes (only private jets)
- No bright daylight interiors
- No random objects, tools, or metaphors
- Consistent color temperature and mood

### Image Sources
**Primary**: Unsplash
- Search terms: "private jet interior", "business jet cabin luxury", "private jet wing sunset", "private jet tarmac night", "luxury private aviation"

**Backup**: Pexels (same searches)

### Specific Image Requirements

#### Hero Section
- **Type**: Private jet exterior above clouds OR jet wing at dusk from a private jet
- **Style**: Cinematic, low-contrast, wide framing
- **Mood**: Dusk, dawn, night, or over-cloud shots
- **Size**: Large, full-screen
- **NO**: Commercial airline seats, passenger windows, bright interiors

#### "What We Do" Gallery (3 images)
1. **Private jet wing / exterior** (sunset/dusk)
2. **Private jet interior** (leather seats, lighting, minimal)
3. **Private jet landing or tarmac at night**

All must be:
- Smaller, reasonable-size private jets (not massive commercial aircraft)
- Dark, editorial, consistent in tone
- Interior: No people, no cheesy smiles, no overdecorated gold interiors
- Think: quiet, controlled, expensive

#### Full-Width Showcase Image
- **Type**: Private jet (not commercial)
- **Style**: Symmetrical nose-forward shot OR long-range jet in flight
- **Mood**: Slightly reduced contrast to blend with site mood
- **NO**: Commercial airliners

### Images to NEVER Use
- Commercial airline cabins
- Economy seats
- Passenger windows with bright daylight
- Logos or bright liveries
- Busy airports
- Party scenes
- Loud poker tables
- Flashy champagne popping
- Anything influencer-ish
- Tools, hammers, or symbolic objects
- Commercial aircraft of any kind

---

## PAGE STRUCTURE

### 1. HERO SECTION
**Content**:
- Company name: "Aurelian Air"
- Slogan: "Guaranteed arrival. Private when possible."
- Full-screen hero image (private jet exterior/wing at dusk)
- Dark overlay (rgba(10, 10, 10, 0.8) to rgba(10, 10, 10, 0.6))
- Subtle vignette effect
- Very light film grain texture (3-4% opacity)
- No buttons in hero

**Jet Fly-Across Animation** (On page load only):
- **Type**: Abstract light trace OR minimal silhouette line
- **NOT**: Detailed plane graphic, cartoon plane, or realistic jet
- **Style**: Aerospace blueprint aesthetic - thin horizontal line
- **Behavior**: 
  - Enters from off-screen left, exits off-screen right
  - Duration: 2 seconds
  - Easing: ease-in-out (no bounce, no acceleration spikes)
  - Opacity: 30-40%
  - Color: Soft silver/graphite (rgba(180, 180, 180, 0.3-0.4))
  - Z-layer: Behind hero text (z-index: 1)
  - One-time only on hard refresh
  - No sound, no loop, no repeat on scroll
- **After animation**: Hero text fades in slowly (1.5s ease-out, starts at 2.2s)

### 2. WHAT WE DO
**Content**:
- Heading: "What We Do"
- Paragraph explaining:
  - Access to discounted private aviation
  - Arrival is guaranteed
  - If private jet unavailable, first-class commercial arranged at no extra cost
- Calm, factual language, no sales tone

**Visual**:
- 3-image gallery above content
- Images: Private jet wing/exterior, interior, tarmac night
- Dark overlays on images
- Fade-in on scroll

### 3. HOW IT WORKS
**Content**:
- Heading: "How It Works"
- Three steps with Roman numerals (I, II, III):
  1. **Request**: Submit your route and travel window
  2. **Secure**: We confirm private availability or arrange first-class alternative
  3. **Arrive**: Travel with certainty, regardless of aircraft type

**Visual**:
- Dark background gradient (reduced brightness)
- Increased spacing between steps (5rem gap)
- Roman numerals: Thin, elegant, lower opacity (0.65)
- Subtle divider lines animate on hover
- Staggered fade-in on scroll
- No images needed

### 4. THE DIFFERENCE
**Content**:
- Heading: "The Difference"
- Thin horizontal rule above paragraph (gold gradient, animates on scroll)
- Paragraph explaining:
  - Empty-leg flights are unpredictable
  - Aurelian Air removes that risk entirely
  - Emphasizes certainty and responsibility

**Visual**:
- Full-width private jet image above content
- Subtle background gradient
- Text reveal on scroll (opacity + 10px rise)
- No additional images needed

### 5. MISSION STATEMENT
**Content**:
- One concise mission statement:
  "To bring certainty to private aviation by eliminating risk, complexity, and unpredictability."

**Visual**:
- Centered, italic serif
- Oversized quotation mark at 8% opacity behind text
- Increased line spacing (1.7)
- Subtle background pattern
- Gold color (#e5c158)

### 6. WHO IT'S FOR
**Content**:
- Heading: "Who It's For"
- Three short lines (not paragraph):
  1. Business travelers requiring reliable transportation.
  2. First-class commercial flyers interested in upgrading to private travel when available, without accepting risk.
  3. Clients who value discretion, control, and certainty above all else.

**Visual**:
- Generous whitespace between lines (2.5rem gap)
- Staggered fade-in animation
- No images needed

### 7. WAITLIST SECTION
**Content**:
- Heading: "Request Early Access"
- Subtext: "Launching on select routes with limited availability"
- Embedded Google Form (placeholder for now)
- Fields needed:
  - Full name
  - Email
  - Primary route (city to city)
  - Preferred travel window
  - Number of passengers

**Visual**:
- Dark form container
- Gold accent on subtext
- Centered layout

### 8. FOOTER
**Content**:
- **Brand Section**:
  - "Aurelian Air"
  - "Private aviation services"
  - Gold divider line
  - Description: "Bringing certainty to private aviation through guaranteed arrival, regardless of aircraft availability."

- **Services Column**:
  - Private Jet Charter
  - Empty-Leg Flights
  - First-Class Backup
  - Guaranteed Arrival

- **Company Column**:
  - Our Mission
  - How It Works
  - The Difference
  - Early Access

- **Contact Column**:
  - contact@aurelianair.com (gold color, clickable)
  - Available 24/7
  - Discrete Service

- **Bottom**:
  - Legal text: "Subject to availability. Terms apply. All flights operated by certified Part 135 operators." (40% opacity)
  - Copyright: "© 2024 Aurelian Air. All rights reserved. | Editorial imagery via Unsplash" (35% opacity)

**Visual**:
- 4-column grid layout (responsive)
- Gold divider at top
- Hover effects on links (gold accent, subtle animation)
- Quiet, muted styling
- Contact email highlighted in gold

---

## ANIMATIONS & INTERACTIONS

### Scroll Animations
- Subtle fades (≤15px vertical motion)
- Slow timing (0.8-1.2s)
- No bounce, no playful easing
- Mechanical and intentional feel
- Scroll-triggered (IntersectionObserver)

### Hover Effects
- Subtle opacity changes
- Gold accent reveals
- Smooth transitions (0.3-0.5s)
- No flashy effects

### Scroll Progress Indicator
- Thin gold line at top of page
- Shows scroll progress
- Fixed position

---

## TECHNICAL REQUIREMENTS

### Code Quality
- Clean, semantic HTML5
- Modern CSS (variables, flexbox, grid)
- Vanilla JavaScript (no frameworks required)
- Fully responsive (desktop first, mobile optimized)
- Easy to migrate to Framer or Webflow later
- Simple, readable code

### Performance
- Optimized images (1200-1920px width, quality 80)
- Lazy loading for images
- Smooth 60fps animations
- Fast page load

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers

---

## WHAT TO AVOID

### Design
- No pricing
- No aircraft lists
- No testimonials
- No blog
- No flashy animations
- No startup language
- No jargon (Part 135, tail numbers, etc.)
- No rounded playful elements
- No bright colors
- No gradients except subtle dark overlays

### Content
- No sales tone
- No hype
- No emojis
- No buzzwords
- No people in images
- No commercial aircraft imagery
- No tools or symbolic objects

### Code
- No unnecessary frameworks
- No bloated libraries
- No complex build processes
- Keep it simple and maintainable

---

## RESPONSIVE BREAKPOINTS

- Desktop: 1200px+ (primary)
- Tablet: 768px - 1024px
- Mobile: 480px - 768px
- Small Mobile: < 480px

### Mobile Considerations
- Stack columns vertically
- Reduce image heights
- Maintain readability
- Touch-friendly interactions
- Simplified animations

---

## FINAL CHECKLIST

Before completion, verify:

✅ All images are private jets (interior/exterior)
✅ No commercial aircraft imagery
✅ No tools, hammers, or non-aviation objects
✅ Jet fly-across is abstract (not detailed plane)
✅ Dark, editorial image style throughout
✅ Gold accents used sparingly
✅ Typography is elegant and readable
✅ Animations are subtle and mechanical
✅ Footer is quiet and professional
✅ All sections have proper spacing
✅ Mobile responsive
✅ No startup vibes
✅ Feels like a private bank or established aviation firm

---

## DELIVERABLES

1. `index.html` - Complete HTML structure
2. `styles.css` - All styling
3. JavaScript inline in HTML (or separate file if preferred)
4. README.md with setup instructions

---

## NOTES FOR DEVELOPER

This is not a travel blog. This is not a startup. This is a premium service for executives who value discretion and certainty. Every design decision should reinforce that.

The user should think: "Oh. This is serious." Not: "That's cool."

Luxury brands imply. They don't show. The jet fly-across should suggest speed and precision, not excitement.

Keep it minimal. Keep it authoritative. Keep it premium.
