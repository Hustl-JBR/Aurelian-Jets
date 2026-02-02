# Google Sheets Integration Setup

## Quick Setup Guide

### Step 1: Prepare Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1u3G0w-9x37bXEuY1xZK4zwWpudgT0WopR_-l2byeZT0/edit
2. Create a sheet named exactly: **"Aurelian Air — Early Access"**
3. Set up these columns in the first row (in this exact order):
   - Timestamp
   - Full Name
   - Email Address
   - Primary Route (City → City)
   - Preferred Travel Window
   - Number of Passengers
   - Source
   - Status

### Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code
3. Copy the entire contents of `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. **IMPORTANT**: Update line 15 with your actual Spreadsheet ID:
   ```javascript
   const SPREADSHEET_ID = '1u3G0w-9x37bXEuY1xZK4zwWpudgT0WopR_-l2byeZT0';
   ```
6. **OPTIONAL**: Update line 95 with your email for notifications:
   ```javascript
   const recipientEmail = 'your-email@example.com';
   ```
7. Save the project (Ctrl+S or Cmd+S)
8. Name it "Aurelian Air Form Handler"

### Step 3: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Aurelian Air Form Handler"
   - **Execute as**: **Me** (your account)
   - **Who has access**: **Anyone** (this allows the form to submit)
5. Click **Deploy**
6. **Copy the Web App URL** (you'll need this)

### Step 4: Update index.html

1. Open `index.html`
2. Find this line (around line 520):
   ```javascript
   const GOOGLE_SCRIPT_URL = '1rHqxDHisVSc22xPAEwhHgSQtuDlikoKNMs7sxdNfa_ikiqAXYHv5lKPz';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the Web App URL you copied
4. Save the file

### Step 5: Test

1. Open `index.html` in your browser
2. Fill out the form
3. Submit
4. Check your Google Sheet - a new row should appear

## Troubleshooting

**Form doesn't submit:**
- Check browser console for errors (F12)
- Verify the Web App URL is correct
- Make sure Apps Script is deployed as "Anyone" can access

**Data not appearing in sheet:**
- Verify sheet name matches exactly: "Aurelian Air — Early Access"
- Check that column headers are in the correct order
- Look at Apps Script execution log (View > Executions)

**Email notifications not working:**
- Make sure you set your email in the script
- Check Apps Script execution log for errors
- Email notifications are optional and won't break form submission if they fail

## Security Notes

- The Web App URL is public but only accepts POST requests
- No authentication required for form submission
- Data is written directly to your Google Sheet
- Sheet should remain private (not publicly shared)

## Column Structure

The script expects these columns in this exact order:

1. Timestamp (auto-filled)
2. Full Name
3. Email Address
4. Primary Route (City → City)
5. Preferred Travel Window
6. Number of Passengers
7. Source (auto-filled as "AurelianAir.com")
8. Status (left blank)
