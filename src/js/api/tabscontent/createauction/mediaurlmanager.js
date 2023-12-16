import { showFeedbackModal } from "../../../utils/feedbackmodal.js";

export function attachMediaUrlEvent() {
  document.getElementById("addMediaUrl").addEventListener("click", () => {
    const mediaUrls = document.getElementById("mediaUrls");
    const totalUrls = mediaUrls.querySelectorAll(
      '[name="auctionMedia"]',
    ).length;

    if (totalUrls < 5) {
      const newInput = document.createElement("input");
      newInput.setAttribute("type", "url");
      newInput.setAttribute("class", "form-control mb-2");
      newInput.setAttribute("name", "auctionMedia");
      mediaUrls.insertBefore(newInput, mediaUrls.lastElementChild);
    } else {
      showFeedbackModal("Limit Reached", "Limit of 5 images reached.");
    }
  });
}
