import { fetchData } from "../../apiservice.js";
import { handleError } from "../../../utils/errorhandler.js";
import { showFeedbackModal } from "../../../utils/feedbackmodal.js";
import { refreshHeader } from "../../header/headersetup.js";
import { renderUserProfile } from "./profile.js";

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

        refreshHeader();
        renderUserProfile();
      } catch (error) {
        handleError(error);
      }
    });
}
