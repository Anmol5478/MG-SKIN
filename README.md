# MG-SKIN

## SheetDB form setup

The appointment, contact, and review forms post to SheetDB.

1. Create a Google Sheet with three tabs named `Appointments`, `Contact`, and `Reviews`.
2. Add these header rows in row 1:
   - `Appointments`: `submittedAt`, `name`, `phone`, `email`, `service`, `date`, `time`, `message`
   - `Contact`: `submittedAt`, `name`, `email`, `phone`, `message`
   - `Reviews`: `submittedAt`, `name`, `treatment`, `rating`, `comment`
3. Go to [SheetDB](https://sheetdb.io/) and create an API from your Google Sheet.
4. Copy your SheetDB API URL into `.env`:

```bash
VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/YOUR_API_ID
```

Restart the Vite dev server after changing `.env`.
