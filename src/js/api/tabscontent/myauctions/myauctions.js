import { fetchData } from "../../apiservice.js";
import { loadModal } from "../../../loginmodal/index.js";
import { createListingCard } from "../listingcard.js";
import { attachAuctionViewEvent } from "../bidding/bidlistener.js";
import { handleError } from "../../../utils/errorhandler.js";

export async function renderMyAuctions() {
  const profileName = localStorage.getItem("profileName");
  const displayContainer = document.getElementById("templateDisplay");

  if (profileName) {
    try {
      const myListings = await fetchData(`profiles/${profileName}/listings`);

      if (myListings?.length > 0) {
        displayContainer.innerHTML = myListings
          .map((listing) => createListingCard(listing))
          .join("");
        attachAuctionViewEvent(myListings);
      } else {
        displayContainer.innerHTML =
          "<p>You have not created any auctions yet.</p>";
      }
    } catch (error) {
      handleError;
      displayContainer.innerHTML = "<p>Error loading your auctions.</p>";
    }
  } else {
    displayContainer.innerHTML = `
      <p>Please log in to view your auctions.</p>
      <button id="loginButton" class="btn btn-primary">Log In</button>
    `;

    document.getElementById("loginButton").addEventListener("click", loadModal);
  }
}
