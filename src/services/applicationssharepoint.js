const APPLICATIONS_URL =
  "https://euieg.sharepoint.com/sites/TalentBridge/_api/web/lists/getbytitle('Applications')/items";

export async function getApplications() {
  const response = await fetch(APPLICATIONS_URL, {
    headers: {
      Accept: "application/json;odata=verbose",
    },
    credentials: "include",
  });

  const data = await response.json();

  return data.d.results;
}