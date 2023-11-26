export function createListingCard(listing) {
  const imageUrl =
    listing.media && listing.media.length > 0
      ? listing.media[0]
      : "assets/noimageavailable.png";
  const bidCountText =
    listing._count && listing._count.bids
      ? `${listing._count.bids} bids`
      : "No bids yet";

  return `<div class="card mb-3" data-listing-id="${listing.id}">
                <img src="${imageUrl}" class="card-img-top" alt="${
                  listing.title
                }" onerror="this.onerror=null;this.src='${imageUrl}';">
                <div class="card-body">
                    <h3 class="card-title">${listing.title}</h3>
                    <p class="card-text">${listing.description}</p>
                    <p class="card-text"><small class="text-muted">Ends at: ${new Date(
                      listing.endsAt,
                    ).toLocaleDateString()}</small></p>
                    <p class="card-text"><small class="text-muted">${bidCountText}</small></p>
                    <button class="btn btn-primary view-auction-button">View Auction</button>
                </div>
            </div>`;
}
