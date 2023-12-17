import { createListingCard } from "../listingcard.js";
import { fetchData } from "../../apiservice.js";
import { attachAuctionViewEvent } from "../bidding/bidlistener.js";
import { handleError } from "../../../utils/errorhandler.js";

export async function renderMarketplace() {
  const displayContainer = document.getElementById("templateDisplay");

  displayContainer.innerHTML = '<h2 class="tab-heading">Marketplace</h2>';

  try {
    const listings = await fetchData(
      "listings?_active=true&_bids=true&sort=created&sortOrder=desc",
    );

    if (listings && listings.length > 0) {
      displayContainer.innerHTML += listings
        .map((listing) => createListingCard(listing))
        .join("");
      attachAuctionViewEvent(listings);
    } else {
      displayContainer.innerHTML += "<p>No active listings available.</p>";
    }
  } catch (error) {
    handleError(error);
    displayContainer.innerHTML +=
      "<p>Unable to fetch marketplace listings.</p>";
  }
}
