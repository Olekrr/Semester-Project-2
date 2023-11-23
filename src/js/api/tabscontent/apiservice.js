import { baseUrl } from "../urlbase.js";

export async function fetchData(endpoint) {
  const token = localStorage.getItem("authToken");

  try {
    const response = await fetch(`${baseUrl}/auction/${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
console.log("Fetching data from:", `${baseUrl}/auction/listings?_active=true`);
