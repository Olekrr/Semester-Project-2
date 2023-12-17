import { createListingCard } from "../listingcard.js";
import { fetchData } from "../../apiservice.js";
import { attachAuctionViewEvent } from "../bidding/bidlistener.js";
import { loadModal } from "../../../loginmodal/index.js";
import { handleError } from "../../../utils/errorhandler.js";

export async function renderMyActiveBids() {
  const displayContainer = document.getElementById("templateDisplay");
  const username = localStorage.getItem("profileName");

  displayContainer.innerHTML = '<h2 class="tab-heading">My Active Bids</h2>';

  if (username) {
    try {
      const listings = await fetchData(
        "listings?_active=true&_bids=true&sort=created&sortOrder=desc",
      );
      const userActiveBids = listings.filter((listing) =>
        listing.bids.some((bid) => bid.bidderName === username),
      );

      if (userActiveBids.length > 0) {
        displayContainer.innerHTML += userActiveBids
          .map((listing) => createListingCard(listing))
          .join("");
        attachAuctionViewEvent(userActiveBids);
      } else {
        displayContainer.innerHTML += "<p>No active bids found.</p>";
      }
    } catch (error) {
      handleError(error);
      displayContainer.innerHTML += "<p>Error fetching active bids.</p>";
    }
  } else {
    displayContainer.innerHTML += `
      <p>Please log in to view your active bids.</p>
      <button id="loginButton" class="btn btn-primary">Log In</button>
    `;
    document.getElementById("loginButton").addEventListener("click", loadModal);
  }
}
