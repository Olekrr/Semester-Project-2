import { fetchData } from "../../apiservice.js";
import { showFeedbackModal } from "../../../utils/feedbackmodal.js";
import { handleError } from "../../../utils/errorhandler.js";

export async function submitBid(listingId, amount, modal) {
  try {
    const bidData = { amount: parseFloat(amount) };

    const response = await fetchData(
      `listings/${listingId}/bids`,
      "POST",
      bidData,
    );

    if (response) {
      showFeedbackModal("Success", "Bid placed successfully!");
    } else {
      showFeedbackModal("Error", "Failed to place bid.");
    }

    modal.hide();
  } catch (error) {
    handleError(error);
  }
}
