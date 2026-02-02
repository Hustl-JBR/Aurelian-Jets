# Google Sheet Formatting Instructions

## Automatic Formatting

The Google Apps Script now automatically formats your sheet with:
- **Dark theme** (charcoal/gold) matching Aurelian Air branding
- **Professional header row** with gold text on dark background
- **Alternating row colors** for easy reading
- **Optimized column widths** for all data types
- **Frozen header row** so headers stay visible when scrolling
- **Proper date/time formatting** for timestamps
- **Email links** formatted in italic
- **Centered status column**

## Manual Formatting (If Needed)

If you want to reformat an existing sheet:

1. Open your Google Sheet
2. Go to **Extensions** > **Apps Script**
3. In the function dropdown (top center), select **`formatSheet`**
4. Click **Run** (▶️)
5. Authorize if prompted
6. The sheet will be reformatted with professional styling

## What Gets Formatted

- **Header Row**: Dark charcoal background (#1a1a1a), gold text (#d4af37), bold, 40px height
- **Data Rows**: Soft off-white text (#e8e8e8), alternating dark backgrounds (#0a0a0a / #0f0f0f), 35px height
- **Borders**: Subtle dark borders (#2a2a2a) around all cells
- **Column Widths**: Optimized for each data type
- **Timestamp**: Formatted as `yyyy-mm-dd hh:mm:ss`
- **Email**: Italic font style
- **Status**: Center-aligned

## Sheet Appearance

Your sheet will now have a premium, dark theme that matches the Aurelian Air website aesthetic.
