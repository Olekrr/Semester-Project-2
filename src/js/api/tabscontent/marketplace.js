import { fetchData } from "./apiservice.js";

export async function renderMarketplace() {
  const listings = await fetchData("listings?_active=true");
  const displayContainer = document.getElementById("templateDisplay");

  if (listings && listings.length > 0) {
    displayContainer.innerHTML = listings
      .map(
        (listing) =>
          `<div class="card mb-3">
                <img src="${listing.media[0]}" class="card-img-top" alt="${
                  listing.title
                }">
                <div class="card-body">
                    <h3 class="card-title">${listing.title}</h3>
                    <p class="card-text">${listing.description}</p>
                    <p class="card-text"><small class="text-muted">Ends at: ${new Date(
                      listing.endsAt,
                    ).toLocaleDateString()}</small></p>
                </div>
            </div>`,
      )
      .join("");
  } else {
    displayContainer.innerHTML = "<p>No active listings available.</p>";
  }
}
