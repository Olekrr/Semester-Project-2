import { register } from "../index.js";
import { toggleForms } from "../../loginmodal/toggleform.js";

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
      toggleForms();
      const loginEmail = document.getElementById("loginEmail");
      if (loginEmail) {
        loginEmail.value = email;
      }
    } catch (error) {
      console.error("Registration Error:", error);
    }
  });
}
