import { register } from "../../api/index.js";
import { toggleForms } from "../toggleform.js";
import { handleError } from "../../utils/errorhandler.js";
import { showFeedbackModal } from "../../utils/feedbackmodal.js";

export function registerFormListener() {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const avatarUrl = document.getElementById("registerAvatarUrl").value;

    if (!email.endsWith("@stud.noroff.no")) {
      showFeedbackModal(
        "Registration Error",
        "Registration is only allowed with a @stud.noroff.no email address.",
      );
      return;
    }

    try {
      await register(username, email, password, avatarUrl);
      showFeedbackModal("Success", "Registration Successful");

      toggleForms();
      const loginEmail = document.getElementById("loginEmail");
      if (loginEmail) {
        loginEmail.value = email;
      }
    } catch (error) {
      if (error.name === "TypeError" && error.message === "Failed to fetch") {
        handleError(new Error("Failed to fetch"));
      } else {
        const errorMessage =
          error.errors?.[0]?.message ||
          error.message ||
          "Unknown registration error";
        handleError(new Error(errorMessage));
      }
    }
  });
}
