import { bidHistory } from "./bidhistory.js";
import { bidForm } from "./bidform.js";

export function createBidModal(listing) {
  const bidModal = new bootstrap.Modal(document.getElementById("bidModal"));

  document.getElementById("bidModalLabel").textContent = listing.title;
  document.getElementById("bidModalImage").src =
    listing.media[0] || "assets/noimageavailable.png";
  document.getElementById("bidModalImage").alt = listing.title;
  document.getElementById("bidModalDescription").textContent =
    listing.description;
  document.getElementById("bidModalEndDate").textContent = `Ends at: ${new Date(
    listing.endsAt,
  ).toLocaleDateString()}`;

  const bidHistoryHtml = bidHistory(listing.bids || []);
  document.getElementById("bidModalHistory").innerHTML = bidHistoryHtml;

  const highestBidAmount =
    listing.bids && listing.bids.length > 0 ? listing.bids[0].amount : 0;

  bidForm(listing, highestBidAmount, bidModal);

  bidModal.show();
}
