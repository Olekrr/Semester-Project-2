import { submitBid } from "./submitbid.js";
import { showFeedbackModal } from "../../../utils/feedbackmodal.js";
import { handleError } from "../../../utils/errorhandler.js";

let currentFormHandler = null;

export function bidForm(listing, highestBidAmount, bidModal) {
  const bidFormElement = document.getElementById("bidForm");
  const bidAmountInput = document.getElementById("bidAmount");

  bidAmountInput.value = "";
  bidAmountInput.min = highestBidAmount + 1;
  bidAmountInput.placeholder = `Enter $${highestBidAmount + 1} or more`;

  if (currentFormHandler) {
    bidFormElement.removeEventListener("submit", currentFormHandler);
  }

  currentFormHandler = async (event) => {
    event.preventDefault();
    const bidAmount = parseFloat(bidAmountInput.value);
    if (bidAmount <= highestBidAmount) {
      showFeedbackModal(
        "Bid Error",
        `Your bid must be higher than the current highest bid of $${highestBidAmount}.`,
      );
      return;
    }

    try {
      await submitBid(listing.id, bidAmount, bidModal);
      showFeedbackModal("Success", "Bid placed successfully.");
    } catch (error) {
      handleError(error);
    }
  };

  bidFormElement.addEventListener("submit", currentFormHandler);
}
