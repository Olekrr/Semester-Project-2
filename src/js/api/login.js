import { fetchData } from "./apiservice.js";

export async function login(email, password) {
  const loginData = { email, password };

  const response = await fetchData("auth/login", "POST", loginData);

  localStorage.setItem("authToken", response.accessToken);
  localStorage.setItem("profileName", response.name);

  window.location.reload();

  return response;
}
