# Aurelian Jets Landing Page

A single-page, high-end landing page for Aurelian Jets private aviation services.

## Setup

1. **Google Forms Integration**: 
   - Create a Google Form with the following fields:
     - Full name (Short answer)
     - Email (Short answer)
     - Primary route (Short answer)
     - Preferred travel window (Short answer)
     - Number of passengers (Short answer)
   - Once created, click "Send" → "Embed HTML" → Copy the iframe src URL
   - Replace `YOUR_FORM_ID` in `index.html` (line 99) with your actual Google Form embed URL

2. **Hero Image**:
   - The hero section currently uses an Unsplash placeholder image
   - Replace the background-image URL in `styles.css` (line 50) with your own high-quality private jet runway image
   - Recommended: Dawn/dusk lighting, runway or tarmac setting, architectural feel

3. **Contact Email**:
   - Update the contact email in the footer (line 120) with your actual email address

## Customization

- Colors can be adjusted in the `:root` CSS variables in `styles.css`
- Typography uses Google Fonts (Cormorant Garamond for headings, Inter for body)
- All sections are fully responsive and optimized for desktop and mobile

## Deployment

This is a static site that can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

The code is clean and semantic, making it easy to migrate to Framer or Webflow if needed.
