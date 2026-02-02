# Step-by-Step Setup Guide

## PART 1: Google Apps Script (Server-Side Code)

### Where to Write It:
**Google Apps Script Editor** (inside Google Sheets)

### Step-by-Step:

1. **Open your Google Sheet:**
   - Go to: https://docs.google.com/spreadsheets/d/1u3G0w-9x37bXEuY1xZK4zwWpudgT0WopR_-l2byeZT0/edit

2. **Open Apps Script Editor:**
   - Click **Extensions** (top menu)
   - Click **Apps Script**
   - A new tab opens with a code editor

3. **Delete Existing Code:**
   - Select all code in the editor (Ctrl+A or Cmd+A)
   - Delete it (Delete key)

4. **Paste the Code:**
   - Open the file `google-apps-script.js` from your project folder
   - Copy ALL the code (Ctrl+A, then Ctrl+C)
   - Paste it into the Apps Script editor (Ctrl+V)

5. **Save:**
   - Click **Save** (💾 icon) or press Ctrl+S (Cmd+S on Mac)
   - Name your project: "Aurelian Air Form Handler"

6. **Deploy as Web App:**
   - Click **Deploy** (top right)
   - Click **New deployment**
   - Click the gear icon ⚙️ next to "Select type"
   - Choose **Web app**
   - Set these options:
     - **Description:** "Aurelian Air Form Handler"
     - **Execute as:** Me (your email)
     - **Who has access:** Anyone
   - Click **Deploy**
   - **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/.../exec`)
   - Click **Done**

7. **Authorize (First Time Only):**
   - You may see a warning about "unverified app"
   - Click **Advanced**
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
   - This only happens once

---

## PART 2: Update index.html (Client-Side Code)

### Where to Write It:
**In your project folder:** `index.html`

### Step-by-Step:

1. **Open `index.html`** in your code editor (VS Code, Notepad++, etc.)

2. **Find the Google Script URL:**
   - Press **Ctrl+F** (or Cmd+F on Mac)
   - Search for: `GOOGLE_SCRIPT_URL`
   - You should see line 597 that looks like:
     ```javascript
     const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/1rHqxDHisVSc22xPAEwhHgSQtuDlikoKNMs7sxdNfa_ikiqAXYHv5lKPz/exec';
     ```

3. **Replace with Your Actual URL:**
   - Take the URL you copied from Step 6 above
   - Replace the entire URL between the quotes
   - It should look like:
     ```javascript
     const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL_HERE/exec';
     ```
   - Make sure to keep the quotes!

4. **Save the file:**
   - Press Ctrl+S (or Cmd+S)

---

## PART 3: Format Your Google Sheet (Optional but Recommended)

### Where to Run It:
**Google Apps Script Editor** (same place as Part 1)

### Step-by-Step:

1. **Go back to Apps Script Editor:**
   - In your Google Sheet, go to **Extensions** > **Apps Script**

2. **Run the Format Function:**
   - At the top, you'll see a dropdown that says "doPost"
   - Click it and select **`formatSheet`**
   - Click the **Run** button (▶️ play icon)
   - Click **Allow** if prompted (first time only)
   - Wait a few seconds

3. **Check Your Sheet:**
   - Go back to your Google Sheet tab
   - Your sheet should now have:
     - Dark charcoal background
     - Gold header row
     - Professional formatting
     - Optimized column widths

---

## PART 4: Test Everything

1. **Open your website:**
   - Open `index.html` in your browser
   - Or if you're using a local server, go to that URL

2. **Fill out the form:**
   - Enter test data:
     - Full Name: Test User
     - Email: test@example.com
     - Primary Route: New York to Los Angeles
     - Select any travel window
     - Select number of passengers

3. **Submit:**
   - Click **Request Access**
   - You should see: "Request received. Access is reviewed manually..."

4. **Check Google Sheet:**
   - Go back to your Google Sheet
   - Refresh the page
   - You should see a new row with your test data
   - The row should be automatically formatted with the dark theme

---

## Troubleshooting

### If form submission fails:
- Check browser console (F12) for errors
- Verify the URL in `index.html` matches your deployed Apps Script URL
- Make sure Apps Script is deployed as "Anyone" can access

### If data doesn't appear in sheet:
- Check that sheet name is exactly: **"Aurelian Air — Early Access"** (with em dash)
- Make sure Apps Script has permission to edit the sheet
- Try running `formatSheet` function again

### If you see "Script not found":
- Make sure you saved the Apps Script code
- Make sure you deployed it as a Web App
- Copy the URL again from Deploy > Manage deployments

---

## Summary: What Goes Where

| Code File | Where to Put It | What It Does |
|-----------|----------------|--------------|
| `google-apps-script.js` | Google Apps Script Editor | Receives form data, saves to sheet |
| `index.html` | Your project folder (already there) | Website with form (just update the URL) |
| Sheet formatting | Run `formatSheet` function in Apps Script | Makes sheet look professional |

---

**You're all set!** Once you complete these steps, your form will save data to Google Sheets with beautiful formatting.
