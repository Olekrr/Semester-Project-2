import { baseUrl } from "./baseUrl.js";

export async function login(email, password) {
  const response = await fetch(`${baseUrl}/auction/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.ok
    ? await response.json()
    : Promise.reject(await response.json());
}
