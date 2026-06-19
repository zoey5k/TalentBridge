const SHAREPOINT_URL =
  "https://euieg.sharepoint.com/sites/TalentBridge/_api/web/lists/GetByTitle('Positions')/items";

export async function getJobs() {
  try {
    const response = await fetch(SHAREPOINT_URL, {
      headers: {
        Accept: "application/json;odata=verbose",
      },
      credentials: "include",
    });

    const data = await response.json();

    console.log(data.d.results);

    return data.d.results;

  } catch (error) {
    console.error(error);

    return [];
  }
}