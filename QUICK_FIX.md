# Quick Fix: Form Not Saving to Google Sheets

## Most Common Issue: URL Not Configured

The form is still using the placeholder URL. Here's how to fix it:

### Step 1: Get Your Google Apps Script URL

1. Open your Google Sheet
2. Go to **Extensions** > **Apps Script**
3. Click **Deploy** > **Manage deployments**
4. Click the **pencil icon** (edit) on your deployment
5. Copy the **Web App URL** (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

### Step 2: Update index.html

1. Open `index.html` in your editor
2. Press `Ctrl+F` (or `Cmd+F` on Mac)
3. Search for: `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`
4. Replace it with your actual URL (keep the quotes):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL_HERE/exec';
   ```
5. Save the file

### Step 3: Test Again

1. Refresh your browser page
2. Fill out the form
3. Submit
4. Check your Google Sheet - data should appear

## If Still Not Working

Check these:

1. **Apps Script Deployment Settings:**
   - Execute as: **Me**
   - Who has access: **Anyone** ← This is critical!

2. **Sheet Name:**
   - Must be exactly: **"Aurelian Air — Early Access"**
   - Check for the em dash (—) not regular dash (-)

3. **Browser Console:**
   - Press F12
   - Look for errors in Console tab
   - Share any error messages you see

4. **Apps Script Authorization:**
   - In Apps Script, click Run on the `doPost` function
   - Authorize it when prompted
   - This only needs to be done once

## Alternative: Test the Script Directly

1. In Apps Script editor, paste this test code:
   ```javascript
   function test() {
     const sheet = SpreadsheetApp.openById('1u3G0w-9x37bXEuY1xZK4zwWpudgT0WopR_-l2byeZT0');
     const targetSheet = sheet.getSheetByName('Aurelian Air — Early Access') || sheet.insertSheet('Aurelian Air — Early Access');
     targetSheet.appendRow([new Date(), 'Test', 'test@test.com', 'NYC to LAX', 'Q1 2024', '1-2', 'AurelianAir.com', '']);
   }
   ```
2. Run it
3. Check your sheet - if a row appears, the script works
4. The issue is likely the URL not being set in index.html
