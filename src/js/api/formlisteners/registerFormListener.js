import { register } from "../index.js";

export function registerFormListener() {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const avatarUrl = document.getElementById("registerAvatarUrl").value;
    try {
      const response = await register(username, email, password, avatarUrl);
      console.log("Registration Success:", response);
    } catch (error) {
      console.error("Registration Error:", error);
    }
  });
}
