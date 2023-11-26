import { fetchData } from "../apiservice.js";

export async function submitBid(listingId, amount, modal) {
  try {
    const bidData = { amount: parseFloat(amount) };

    const response = await fetchData(
      `listings/${listingId}/bids`,
      "POST",
      bidData,
    );

    if (response) {
      console.log("Bid successful:", response);
      alert("Bid placed successfully!");
    } else {
      console.error("Bid failed:", response);
      alert("Failed to place bid.");
    }

    modal.hide();
  } catch (error) {
    console.error("Error submitting bid:", error);
    alert("Error occurred while placing bid.");
  }
}
