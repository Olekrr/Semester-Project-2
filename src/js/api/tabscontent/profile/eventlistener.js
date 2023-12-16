import { fetchData } from "../../apiservice.js";
import { handleError } from "../../../utils/errorhandler.js";
import { showFeedbackModal } from "../../../utils/feedbackmodal.js";

export function avatarUpdate(profileName) {
  document
    .getElementById("updateAvatarForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const avatarUrl = document.getElementById("avatarUrl").value;

      try {
        const updateData = { avatar: avatarUrl };

        await fetchData(`profiles/${profileName}/media`, "PUT", updateData);
        showFeedbackModal("Success", "Avatar updated successfully!");

        const profilePicElement = document.querySelector(".profile-avatar");
        if (profilePicElement) {
          profilePicElement.src = avatarUrl;
        }
      } catch (error) {
        handleError(error);
      }
    });
}
