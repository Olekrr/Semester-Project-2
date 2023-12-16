import { login } from "../../api/index.js";
import { handleError } from "../../utils/errorhandler.js";
import { showFeedbackModal } from "../../utils/feedbackmodal.js";

export function loginFormListener() {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      await login(email, password);
      showFeedbackModal("Success", "Logged in successfully!");
    } catch (error) {
      handleError(error);
    }
  });
}
