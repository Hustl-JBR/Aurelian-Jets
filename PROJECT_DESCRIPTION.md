# Aurelian Air - Landing Page with Google Sheets Integration

## Project Overview

A premium, single-page landing page for Aurelian Air, a private aviation company. The site features a sophisticated dark theme with gold accents, cinematic animations, and seamless form submission integration with Google Sheets.

## Key Features

### Design & Branding
- **Ultra-premium aesthetic**: Dark charcoal/graphite color palette with soft off-white text and subtle gold accents
- **Typography**: Elegant serif (Cormorant Garamond) for headings, modern sans-serif (Inter) for body text
- **Cinematic animations**: Jet fly-across animation on page load, scroll-triggered fade-ins, parallax effects
- **Aviation-focused imagery**: Private jet exteriors and interiors, tarmac shots, wing views (all dark, editorial, consistent tone)

### Page Sections
1. **Hero Section**: Full-width background with jet fly-across animation, hero text with background panel
2. **What We Do**: Gallery of private jet images with scroll animations
3. **How It Works**: Three-step process with Roman numerals (I, II, III)
4. **The Difference**: Text section with expanding horizontal rule animation
5. **Mission Statement**: Oversized quotation mark, increased line spacing
6. **Who It's For**: Three-line executive statement
7. **Service Sections**: Four detailed service pages (Charter Services, Empty-Leg Flights, First-Class Backup, Guaranteed Arrival) with smooth scroll navigation
8. **Waitlist Form**: Professional form with validation
9. **Footer**: Clean, minimal footer with Services, Company, and Contact links

### Technical Implementation

#### Frontend (index.html + styles.css)
- **HTML5**: Semantic structure with smooth scroll navigation
- **CSS3**: Custom properties, responsive typography with `clamp()`, advanced animations
- **JavaScript**: 
  - Intersection Observer API for scroll-triggered animations
  - Form validation (required fields, email format)
  - Smooth scrolling with offset
  - Parallax effects on hero background
  - Scroll progress indicator

#### Backend (Google Apps Script)
- **Server-side form handling**: Receives POST requests from frontend
- **Google Sheets integration**: Automatically appends form submissions to designated sheet
- **Professional sheet formatting**: Dark theme matching website aesthetic
  - Charcoal background (#0a0a0a)
  - Gold header row (#d4af37 on #1a1a1a)
  - Alternating row colors for readability
  - Optimized column widths
  - Frozen header row
  - Proper date/time formatting
  - Email column in italic
  - Centered status column

### Form Submission Flow

1. User fills out "Request Early Access" form with:
   - Full Name (required)
   - Email Address (required, validated)
   - Primary Route (required)
   - Preferred Travel Window (optional dropdown)
   - Number of Passengers (optional dropdown)

2. Frontend validates input and sends data to Google Apps Script via fetch API

3. Google Apps Script:
   - Receives JSON data
   - Appends row to Google Sheet "Aurelian Air — Early Access"
   - Formats new row with dark theme styling
   - Returns success response

4. User sees confirmation message: "Request received. Access is reviewed manually and availability is limited. You will be contacted if a route becomes available."

### Data Structure

**Google Sheet Columns (in order):**
1. Timestamp (auto-generated)
2. Full Name
3. Email Address
4. Primary Route (City → City)
5. Preferred Travel Window
6. Number of Passengers
7. Source (auto-filled: "AurelianAir.com")
8. Status (blank, for manual updates)

### Technical Specifications

- **No external dependencies**: Pure HTML, CSS, JavaScript
- **No database**: Uses Google Sheets as data storage
- **No authentication required**: Public form submission
- **Privacy-focused**: No analytics, no local storage, no public sheet exposure
- **Responsive design**: Works on desktop, tablet, and mobile
- **Browser compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

### Files Structure

```
Aurelian/
├── index.html              # Main landing page
├── styles.css              # All styling and animations
├── google-apps-script.js   # Server-side form handler
├── GOOGLE_SHEETS_SETUP.md  # Setup instructions
├── STEP_BY_STEP_SETUP.md  # Detailed setup guide
├── SHEET_FORMATTING.md     # Sheet formatting guide
└── QUICK_REFERENCE.md      # Quick setup checklist
```

### Setup Requirements

1. **Google Sheet**: Must exist with ID `1u3G0w-9x37bXEuY1xZK4zwWpudgT0WopR_-l2byeZT0`
2. **Google Apps Script**: Deploy `google-apps-script.js` as Web App (Anyone can access)
3. **index.html**: Update `GOOGLE_SCRIPT_URL` constant with deployed Apps Script URL

### Brand Guidelines

- **Tone**: Calm, controlled, confident, quiet luxury, old-money energy
- **Avoid**: Startup language, flashy animations, pricing, testimonials, commercial airline imagery
- **Imagery**: Private jets only (smaller, reasonable size), dark/moody, editorial style, no people, no bright daylight

---

**Status**: Production-ready
**Last Updated**: 2024
**Deployment**: Static hosting (GitHub Pages, Netlify, Vercel, etc.)
