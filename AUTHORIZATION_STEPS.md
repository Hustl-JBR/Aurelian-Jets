# Authorization Steps for Google Apps Script

## What You're Seeing

The "New deployment" dialog is asking for permission to access your Google Sheet. This is **normal and required** for the script to save form data.

## What to Do

1. **Click "Authorize access"** (the blue button)

2. **You'll be redirected to a Google sign-in page:**
   - Sign in with the Google account that owns the Sheet
   - You may see a warning about "unverified app" - this is normal for personal scripts

3. **Click "Advanced"** (if you see the warning)

4. **Click "Go to [Your Project Name] (unsafe)"**
   - Don't worry - it's safe because it's YOUR script
   - Google shows this warning for all custom Apps Scripts

5. **Click "Allow"** to grant permissions:
   - The script needs permission to:
     - View and manage your Google Sheets
     - Send emails (if you enable email notifications)

6. **You'll be redirected back to Apps Script**

7. **The deployment will complete** and you'll see:
   - A Web App URL (copy this!)
   - A "Done" button

## After Authorization

1. **Copy the Web App URL** that appears
2. **Update `index.html`** line 597 with this URL
3. **Test your form!**

## Security Note

This authorization is safe because:
- It's YOUR Google account
- It's YOUR Google Sheet
- The script only accesses the specific sheet you configured
- No one else can access your data

---

**Next Step:** Click "Authorize access" and follow the prompts!
