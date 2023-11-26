import { createBidModal } from "./bidmodal.js";

export function attachAuctionViewEvent(listings) {
  document.querySelectorAll(".view-auction-button").forEach((button) => {
    button.addEventListener("click", function () {
      const cardElement = this.closest(".card[data-listing-id]");
      if (!cardElement) {
        console.error("Card element with listing ID not found");
        return;
      }

      const listingId = cardElement.dataset.listingId;

      const listing = listings.find((l) => l.id === listingId);
      if (listing) {
        createBidModal(listing);
      } else {
        console.error("Listing not found for ID:", listingId);
      }
    });
  });
}
