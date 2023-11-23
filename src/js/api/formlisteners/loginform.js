import { login } from "../index.js";

export function loginFormListener() {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    try {
      const response = await login(email, password);
      console.log("Login Success:", response);
    } catch (error) {
      console.error("Login Error:", error);
    }
  });
}
