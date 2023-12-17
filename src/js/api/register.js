import { fetchData } from "./apiservice.js";

export async function register(username, email, password, avatarUrl) {
  const userData = {
    name: username,
    email,
    password,
    avatar: avatarUrl,
  };

  const response = await fetchData("auth/register", "POST", userData);
  return response;
}
