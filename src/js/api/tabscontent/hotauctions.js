import { createListingCard } from "./listingcard.js";
import { fetchData } from "./apiservice.js";
import { attachAuctionViewEvent } from "./bidding/bidlistener.js";

export async function renderHotAuctions() {
  const displayContainer = document.getElementById("templateDisplay");
  try {
    const allListings = await fetchData(
      "listings?_active=true&_bids=true&sort=created&sortOrder=desc",
    );
    const hotListings = allListings
      .sort((a, b) => (b._count.bids || 0) - (a._count.bids || 0))
      .slice(0, 10);

    displayContainer.innerHTML = hotListings
      .map((listing) => createListingCard(listing))
      .join("");
    attachAuctionViewEvent(hotListings);
  } catch (error) {
    console.error("Error in fetching or processing hot auctions:", error);
    displayContainer.innerHTML = "<p>Unable to fetch hot auctions.</p>";
  }
}
