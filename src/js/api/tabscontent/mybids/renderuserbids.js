import { createListingCard } from "../listingcard.js";
import { fetchData } from "../apiservice.js";
import { attachAuctionViewEvent } from "../bidding/bidlistener.js";

export async function renderMyActiveBids() {
  const displayContainer = document.getElementById("templateDisplay");
  const username = localStorage.getItem("profileName");
  if (!username) {
    console.error("Username not found in local storage.");
    return;
  }

  try {
    const listings = await fetchData(
      "listings?_active=true&_bids=true&sort=created&sortOrder=desc",
    );
    const userActiveBids = listings.filter((listing) =>
      listing.bids.some((bid) => bid.bidderName === username),
    );

    if (userActiveBids.length > 0) {
      displayContainer.innerHTML = userActiveBids
        .map((listing) => createListingCard(listing))
        .join("");
      attachAuctionViewEvent(userActiveBids);
    } else {
      displayContainer.innerHTML = "<p>No active bids found.</p>";
    }
  } catch (error) {
    console.error("Error fetching active bids:", error);
    displayContainer.innerHTML = "<p>Error fetching active bids.</p>";
  }
}
