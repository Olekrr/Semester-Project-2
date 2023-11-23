import { baseUrl } from "./urlbase.js";

export async function register(username, email, password, avatarUrl) {
  const response = await fetch(`${baseUrl}/auction/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: username,
      email,
      password,
      avatar: avatarUrl,
    }),
  });
  return response.ok
    ? await response.json()
    : Promise.reject(await response.json());
}
