import { createListingCard } from "../listingcard.js";
import { fetchData } from "../../apiservice.js";
import { attachAuctionViewEvent } from "../bidding/bidlistener.js";
import { handleError } from "../../../utils/errorhandler.js";

export async function renderHotAuctions() {
  const displayContainer = document.getElementById("templateDisplay");

  displayContainer.innerHTML = '<h2 class="tab-heading">Hot Auctions</h2>';

  try {
    const allListings = await fetchData(
      "listings?_active=true&_bids=true&sort=created&sortOrder=desc",
    );
    const hotListings = allListings
      .sort((a, b) => (b._count.bids || 0) - (a._count.bids || 0))
      .slice(0, 10);

    displayContainer.innerHTML += hotListings
      .map((listing) => createListingCard(listing))
      .join("");
    attachAuctionViewEvent(hotListings);
  } catch (error) {
    handleError(error);
    displayContainer.innerHTML += "<p>Unable to fetch hot auctions.</p>";
  }
}
