# Hero Image Setup Instructions

The hero section uses a **single cinematic private jet in flight** image as the visual anchor. The image is styled for a calm, expensive, editorial feel.

## Current setup

- **Background**: `.hero-bg` in `styles.css` uses a high-quality private jet image (Unsplash default).
- **Effects**: Dark gradient overlay (top → bottom), vignette around edges, reduced saturation (~88%).
- **No video**: Static image only; no motion or autoplay.

## How to use your own image

### Option 1: Local image (recommended)

1. Save your image to the project folder:
   - Name it: `hero-jet-sunset.jpg` (or `.png`)
   - Place it in: `C:\Users\jbrea\OneDrive\Desktop\Aurelian\`

2. In `styles.css`, find `.hero-bg` and set:
   ```css
   background-image: url('hero-jet-sunset.jpg');
   ```

3. If your file has a different name, use that path instead.

### Option 2: Online image URL

1. Get the image URL (e.g. from your CDN or host).

2. In `styles.css`, find `.hero-bg` and set:
   ```css
   background-image: url('https://your-image-url.com/image.jpg');
   ```

## Image guidelines

For the intended look:

- **Subject**: Private jet in flight, angled slightly, above clouds.
- **Light**: Warm (sunrise/sunset preferred).
- **Mood**: Calm, expensive, editorial.
- **Format**: High resolution (e.g. 1920px wide or larger) for sharp display.

The existing overlay, vignette, and saturation filter will keep text readable and the tone consistent.

---

**Next step**: Add your image file (or update the URL in `styles.css`), then refresh the browser.
