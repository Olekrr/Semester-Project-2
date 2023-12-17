export function createListingCard(listing) {
  const fallbackImageUrl = "assets/noimageavailable.png";

  let mediaContent;
  if (listing.media && listing.media.length > 1) {
    mediaContent = `
      <div id="carousel${
        listing.id
      }" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${listing.media
            .map(
              (url, index) => `
            <div class="carousel-image-container carousel-item ${
              index === 0 ? "active" : ""
            }">
              <img src="${url}" class="d-block w-100 h-100 object-fit-cover" alt="Image ${
                index + 1
              }"
                   onerror="this.onerror=null; this.src='${fallbackImageUrl}';">
            </div>
          `,
            )
            .join("")}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel${
          listing.id
        }" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel${
          listing.id
        }" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`;
  } else {
    const imageUrl =
      listing.media && listing.media.length > 0
        ? listing.media[0]
        : fallbackImageUrl;
    mediaContent = `
      <div class="carousel-image-container">
        <img src="${imageUrl}" class="card-img-top w-100 h-100 object-fit-cover" alt="${listing.title}"
             onerror="this.onerror=null; this.src='${fallbackImageUrl}';">
      </div>`;
  }

  const bidCountText =
    listing._count && listing._count.bids
      ? `${listing._count.bids} bids`
      : "No bids yet";

  return `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
      <div class="card" data-listing-id="${listing.id}">
        ${mediaContent}
        <div class="card-body">
          <h3 class="card-title">${listing.title}</h3>
          <p class="card-text">${listing.description}</p>
          <p class="card-text"><small class="text-muted">Ends at: ${new Date(
            listing.endsAt,
          ).toLocaleDateString()}</small></p>
          <p class="card-text"><small class="text-muted">${bidCountText}</small></p>
          <button class="btn btn-primary view-auction-button">View Auction</button>
        </div>
      </div>
    </div>`;
}
