import { baseUrl } from "./urlbase.js";

export async function fetchData(endpoint, method = "GET", data = null) {
  const token = localStorage.getItem("authToken");

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method: method,
    headers: headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${baseUrl}/auction/${endpoint}`, options);

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("API Error Response:", errorResponse);
      throw new Error(
        errorResponse.errors[0].message || "Network response was not ok",
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
