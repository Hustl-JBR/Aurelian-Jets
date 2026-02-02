# Debug: Form Not Creating Sheet

## Step 1: Check Browser Console for Errors

1. **Open `index.html` in your browser**
2. **Press F12** (opens Developer Tools)
3. **Click the "Console" tab**
4. **Submit the form again**
5. **Look for any RED error messages**
6. **Take a screenshot or copy any errors you see**

Common errors you might see:
- "Failed to fetch"
- "CORS error"
- "Network error"
- Any red text

## Step 2: Check Apps Script Executions

1. **Go to your Google Sheet**
2. **Click Extensions > Apps Script**
3. **Click "Executions" in the left sidebar**
4. **Look for NEW executions after you submitted the form**
5. **Check:**
   - Do you see **`doPost`** executions? (This is what form submissions use)
   - Or only **`doGet`**? (This is just the test endpoint)
   - Any **failed** or **error** status?

## Step 3: Test the Script Directly

Let's test if the script can access your sheet:

1. **In Apps Script editor:**
2. **Select function: `getOrCreateSheet`** (from dropdown at top)
3. **Click Run (▶️)**
4. **Authorize if prompted**
5. **Check your Google Sheet** - does the "Aurelian Air — Early Access" sheet appear?

## Step 4: Verify the URL

1. **Open `index.html` in your editor**
2. **Check line 597:**
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/...';
   ```
3. **Make sure:**
   - The URL starts with `https://script.google.com/macros/s/`
   - The URL ends with `/exec`
   - There are no extra characters or spaces
   - The quotes are correct (single quotes)

## Step 5: Check Network Tab

1. **In browser, press F12**
2. **Click "Network" tab**
3. **Submit the form**
4. **Look for a request to `script.google.com`**
5. **Click on it and check:**
   - Status code (should be 200 or similar)
   - Request URL (is it correct?)
   - Response (what does it say?)

## Most Common Issues

### Issue 1: URL Not Correct
- **Symptom:** Browser console shows "Failed to fetch"
- **Fix:** Double-check the URL in index.html line 597

### Issue 2: Script Not Deployed Correctly
- **Symptom:** No `doPost` executions in Apps Script
- **Fix:** Redeploy the script, make sure "Anyone" can access

### Issue 3: Sheet Name Mismatch
- **Symptom:** Script runs but no sheet created
- **Fix:** Check the exact sheet name in google-apps-script.js line 21

### Issue 4: CORS Error
- **Symptom:** Browser console shows CORS error
- **Fix:** This is normal with `no-cors` mode, but check if data is still being sent

---

## What to Share With Me

Please share:
1. **Any errors from browser console (F12 > Console)**
2. **What you see in Apps Script Executions tab** (any new `doPost` executions?)
3. **The exact URL from index.html line 597** (you can mask part of it if you want)

This will help me identify the exact issue!
