# Where to See Your Form Submissions

## What You're Seeing (Executions Tab)

The Executions tab shows that your script is running, but it shows **`doGet`** executions. Form submissions should trigger **`doPost`** instead.

## Where Your Data Actually Goes

### ✅ Check Your Google Sheet

1. **Open your Google Sheet:**
   - Go to: https://docs.google.com/spreadsheets/d/1u3G0w-9x37bXEuY1xZK4zwWpudgT0WopR_-l2byeZT0/edit

2. **Look for the sheet named:**
   - **"Aurelian Air — Early Access"**
   - (Make sure it's the exact name with the em dash —)

3. **Check for new rows:**
   - Each form submission adds a new row
   - Data appears in these columns:
     - Timestamp
     - Full Name
     - Email Address
     - Primary Route
     - Preferred Travel Window
     - Number of Passengers
     - Source
     - Status

## If You Don't See Data

### Check the Executions Tab for Errors:

1. **In Apps Script, click on one of the executions**
2. **Look for:**
   - `doPost` executions (form submissions)
   - Any errors or failed executions
   - Execution logs

### Test the Form:

1. **Open `index.html` in your browser**
2. **Fill out the form completely:**
   - Full Name (required)
   - Email (required)
   - Primary Route (required)
3. **Click "Request Access"**
4. **Check the browser console (F12) for any errors**
5. **Check your Google Sheet again**

## What to Look For

- ✅ **`doPost` executions** = Form submissions are working
- ❌ **Only `doGet` executions** = Form might not be submitting correctly
- ✅ **New rows in Google Sheet** = Data is being saved
- ❌ **No new rows** = Check form submission or script errors

---

**Next Step:** Open your Google Sheet and check for the "Aurelian Air — Early Access" sheet with your form data!
