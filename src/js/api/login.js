import { baseUrl } from "./urlbase.js";

export async function login(email, password) {
  const response = await fetch(`${baseUrl}/auction/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  localStorage.setItem("authToken", data.accessToken);
  return data;
}
