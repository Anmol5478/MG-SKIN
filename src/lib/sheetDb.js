const SHEETDB_API_URL = "https://sheetdb.io/api/v1/90fj53kqw57yi";

const sheetColumns = {
  Appointments: [
    "submittedAt",
    "name",
    "phone",
    "email",
    "service",
    "date",
    "time",
    "message"
  ],
  Contact: [
    "submittedAt",
    "name",
    "email",
    "phone",
    "message"
  ],
  Reviews: [
    "submittedAt",
    "name",
    "treatment",
    "rating",
    "comment"
  ]
};

export const isSheetDbConfigured = Boolean(SHEETDB_API_URL);

export const submitToSheetDb = async (sheet, data) => {
  if (!SHEETDB_API_URL) {
    throw new Error("SheetDB API URL is not configured.");
  }

  const submittedAt = new Date().toISOString();
  const row = { submittedAt, ...data };
  const columns = sheetColumns[sheet] || Object.keys(row);
  const cleanRow = columns.reduce((values, column) => {
    values[column] = row[column] ?? "";
    return values;
  }, {});

  const url = new URL(SHEETDB_API_URL);
  url.searchParams.set("sheet", sheet);

  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: [cleanRow]
    })
  });

  if (!response.ok) {
    throw new Error(`SheetDB request failed with status ${response.status}.`);
  }

  return response.json();
};
