import { fetchData } from "../../apiservice.js";
import { showFeedbackModal } from "../../../utils/feedbackmodal.js";
import { handleError } from "../../../utils/errorhandler.js";

export async function handleAuctionCreation() {
  const form = document.getElementById("createAuctionForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const title = document.getElementById("auctionTitle").value;
    const description = document.getElementById("auctionDescription").value;
    const mediaInputs = form.querySelectorAll('[name="auctionMedia"]');
    const media = Array.from(mediaInputs)
      .map((input) => input.value)
      .filter((url) => url !== "");
    const endsAt = document.getElementById("auctionEndsAt").value;

    try {
      const response = await fetchData("listings", "POST", {
        title,
        description,
        media,
        endsAt,
      });

      if (response) {
        showFeedbackModal("Success", "Auction created successfully.");
        form.reset();
      }
    } catch (error) {
      handleError(error);
    }
  });
}
