import { createListingCard } from "./listingcard.js";
import { fetchData } from "./apiservice.js";
import { attachAuctionViewEvent } from "./bidding/bidlistener.js";

export async function renderMarketplace() {
  const listings = await fetchData(
    "listings?_active=true&_bids=true&sort=created&sortOrder=desc",
  );
  const displayContainer = document.getElementById("templateDisplay");

  if (listings && listings.length > 0) {
    displayContainer.innerHTML = listings
      .map((listing) => createListingCard(listing))
      .join("");
    attachAuctionViewEvent(listings);
  } else {
    displayContainer.innerHTML = "<p>No active listings available.</p>";
  }
}
