import { createBidModal } from "./bidmodal.js";
import { handleError } from "../../../utils/errorhandler.js";

export function attachAuctionViewEvent(listings) {
  document.querySelectorAll(".view-auction-button").forEach((button) => {
    button.addEventListener("click", function () {
      const cardElement = this.closest(".card[data-listing-id]");
      if (!cardElement) {
        const error = new Error("Card element with listing ID not found");
        handleError(error);
        return;
      }

      const listingId = cardElement.dataset.listingId;
      const listing = listings.find((l) => l.id === listingId);
      if (listing) {
        createBidModal(listing);
      } else {
        const error = new Error("Listing not found for ID: " + listingId);
        handleError(error);
      }
    });
  });
}
