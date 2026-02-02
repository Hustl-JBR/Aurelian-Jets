# Troubleshooting: No Data in Google Sheet

## Current Situation
- You're looking at "Aurelian Jets-Requests" sheet
- No form data is visible
- Need to find or create "Aurelian Air — Early Access" sheet

## Step 1: Check for the Sheet Tab

1. **Look at the bottom of your Google Sheet**
2. **You should see tabs like:**
   - "Aurelian Jets-Requests" (current)
   - "Aurelian Air — Early Access" (target - might not exist yet)

3. **If you DON'T see "Aurelian Air — Early Access":**
   - The sheet will be created automatically when you submit the form
   - OR you can create it manually (see Step 2)

## Step 2: Test Form Submission

1. **Open `index.html` in your browser**
2. **Fill out the form:**
   - Full Name: Test User
   - Email: test@example.com
   - Primary Route: New York to Los Angeles
   - (Other fields optional)
3. **Click "Request Access"**
4. **Wait 2-3 seconds**
5. **Go back to your Google Sheet and refresh**
6. **Check for:**
   - New sheet tab: "Aurelian Air — Early Access"
   - New row with your test data

## Step 3: Check for Errors

### In Browser (F12):
1. Press **F12** to open Developer Tools
2. Click **Console** tab
3. Submit the form
4. Look for any **red error messages**
5. Share any errors you see

### In Apps Script:
1. Go to **Extensions** > **Apps Script**
2. Click **Executions** (left sidebar)
3. Look for **`doPost`** executions (not `doGet`)
4. Click on a `doPost` execution to see details
5. Check for any errors

## Step 4: Verify Sheet Name

The script is looking for a sheet named exactly:
**"Aurelian Air — Early Access"**

Important:
- Must have the em dash (—) not regular dash (-)
- Must match exactly (case-sensitive)
- The script will CREATE this sheet if it doesn't exist

## Step 5: Manual Sheet Creation (If Needed)

If the form isn't creating the sheet automatically:

1. **In your Google Sheet, click the "+" button** (bottom left, next to sheet tabs)
2. **Rename the new sheet to:** `Aurelian Air — Early Access`
3. **Make sure the name matches exactly** (copy-paste from the script)
4. **Test the form again**

## Common Issues

### Issue 1: Form Not Submitting
- **Check:** Browser console (F12) for errors
- **Fix:** Verify URL in index.html line 597 is correct

### Issue 2: Script Not Running
- **Check:** Apps Script Executions tab
- **Fix:** Make sure script is deployed and authorized

### Issue 3: Wrong Sheet Name
- **Check:** Sheet tab name matches exactly
- **Fix:** Rename sheet or update script

### Issue 4: Permissions
- **Check:** Apps Script has access to Sheets
- **Fix:** Re-authorize if needed

---

## Quick Test Checklist

- [ ] Form filled out completely (Name, Email, Route)
- [ ] Form submitted successfully
- [ ] Browser console shows no errors
- [ ] Apps Script shows `doPost` execution
- [ ] Google Sheet refreshed
- [ ] "Aurelian Air — Early Access" sheet exists
- [ ] New row appears in the sheet

---

**Next Step:** Test the form submission and check both the browser console and Apps Script executions for any errors.
