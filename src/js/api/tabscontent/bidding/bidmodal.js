import { bidHistory } from "./bidhistory.js";
import { bidForm } from "./bidform.js";

export function createBidModal(listing) {
  const bidModal = new bootstrap.Modal(document.getElementById("bidModal"));
  const fallbackImageUrl = "assets/noimageavailable.png";

  const generateCarousel = (media) => {
    if (media && media.length > 1) {
      const carouselItems = media
        .map(
          (url, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img src="${url}" class="d-block w-100" alt="Image ${index + 1}" 
               onerror="this.onerror=null; this.src='${fallbackImageUrl}';">
        </div>
      `,
        )
        .join("");

      return `
        <div id="carouselModal" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${carouselItems}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselModal" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselModal" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>`;
    } else {
      const imageUrl = media && media.length > 0 ? media[0] : fallbackImageUrl;
      return `<img src="${imageUrl}" class="d-block w-100" alt="${listing.title}" 
                   onerror="this.onerror=null; this.src='${fallbackImageUrl}';">`;
    }
  };

  document.getElementById("bidModalLabel").textContent = listing.title;
  document.getElementById("bidModalDescription").textContent =
    listing.description;
  document.getElementById("bidModalEndDate").textContent = `Ends at: ${new Date(
    listing.endsAt,
  ).toLocaleDateString()}`;

  const mediaContent = generateCarousel(listing.media);
  document.getElementById("bidModalImageContainer").innerHTML = mediaContent;

  const bidHistoryHtml = bidHistory(listing.bids || []);
  document.getElementById("bidModalHistory").innerHTML = bidHistoryHtml;

  const highestBidAmount =
    listing.bids && listing.bids.length > 0 ? listing.bids[0].amount : 0;
  bidForm(listing, highestBidAmount, bidModal);

  bidModal.show();
}
