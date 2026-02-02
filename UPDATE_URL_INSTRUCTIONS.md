# Update the Web App URL in index.html

## What You Need

You have:
- ✅ Deployment version
- ✅ Web App URL
- ✅ Deployment URL

## Next Step: Update index.html

1. **Copy your Web App URL** (it looks like: `https://script.google.com/macros/s/.../exec`)

2. **Open `index.html`** in your code editor

3. **Find line 597** (or search for `GOOGLE_SCRIPT_URL`)

4. **Replace the URL** between the quotes:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
   ```

5. **Save the file** (Ctrl+S or Cmd+S)

6. **Test the form:**
   - Open `index.html` in your browser
   - Fill out the form
   - Submit it
   - Check your Google Sheet - data should appear!

## Current Line 597

Right now it says:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/1rHqxDHisVSc22xPAEwhHgSQtuDlikoKNMs7sxdNfa_ikiqAXYHv5lKPz/exec';
```

**Replace this entire URL** with your actual Web App URL from the deployment.

---

**Once updated, your form will save data to Google Sheets!** 🎉
