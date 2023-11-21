//import { baseUrl } from "./baseURL";

const baseUrl = "https://api.noroff.dev/api/v1";

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
