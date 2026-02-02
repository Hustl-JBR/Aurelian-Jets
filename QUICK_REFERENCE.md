# Quick Reference: What Code Goes Where

## 📋 TWO PLACES TO PUT CODE:

---

## 1️⃣ GOOGLE APPS SCRIPT (Server-Side)

**FILE:** `google-apps-script.js` (in your project folder)

**WHERE TO PASTE IT:**
- Open your Google Sheet
- Click **Extensions** → **Apps Script**
- Delete all existing code
- Copy ALL code from `google-apps-script.js`
- Paste it into the Apps Script editor
- Click **Save** (Ctrl+S)
- Click **Deploy** → **New deployment** → **Web app**
- Set: Execute as **Me**, Who has access: **Anyone**
- Click **Deploy**
- **COPY THE URL** that appears

**WHAT IT DOES:**
- Receives form submissions
- Saves data to Google Sheet
- Formats the sheet with dark theme

---

## 2️⃣ INDEX.HTML (Client-Side)

**FILE:** `index.html` (in your project folder - already exists)

**WHAT TO CHANGE:**
- Open `index.html` in your editor
- Find line 597 (search for `GOOGLE_SCRIPT_URL`)
- Replace the URL with the one you copied from Step 1

**CURRENT LINE 597:**
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/1rHqxDHisVSc22xPAEwhHgSQtuDlikoKNMs7sxdNfa_ikiqAXYHv5lKPz/exec';
```

**IF YOUR URL IS DIFFERENT:**
- Replace everything between the quotes
- Keep the quotes!
- Should look like: `'https://script.google.com/macros/s/YOUR_URL/exec'`

**WHAT IT DOES:**
- Your website with the form
- Sends form data to Google Apps Script

---

## ✅ CHECKLIST:

- [ ] Pasted `google-apps-script.js` into Google Apps Script editor
- [ ] Saved the Apps Script (Ctrl+S)
- [ ] Deployed as Web App (Anyone can access)
- [ ] Copied the Web App URL
- [ ] Updated `GOOGLE_SCRIPT_URL` in `index.html` line 597
- [ ] Saved `index.html`
- [ ] Tested the form submission
- [ ] Checked Google Sheet for new data

---

## 🎨 BONUS: Format Your Sheet

**IN GOOGLE APPS SCRIPT:**
- Select function: `formatSheet` (from dropdown)
- Click **Run** (▶️)
- Your sheet will get dark theme formatting

---

**That's it!** Once both are done, your form will save to Google Sheets.
