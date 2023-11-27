import { loadModal } from "../../../loginmodal/index.js";

export function renderCreateAuctionForm() {
  const profileName = localStorage.getItem("profileName");
  const displayContainer = document.getElementById("templateDisplay");

  if (profileName) {
    displayContainer.innerHTML = `
      <form id="createAuctionForm">
          <div class="mb-3">
              <label for="auctionTitle" class="form-label">Title</label>
              <input type="text" class="form-control" id="auctionTitle" required>
          </div>
          <div class="mb-3">
              <label for="auctionDescription" class="form-label">Description</label>
              <textarea class="form-control" id="auctionDescription"></textarea>
          </div>
          <div class="mb-3">
              <label for="auctionMedia" class="form-label">Media URL</label>
              <input type="url" class="form-control" id="auctionMedia">
          </div>
          <div class="mb-3">
              <label for="auctionEndsAt" class="form-label">Ends At</label>
              <input type="datetime-local" class="form-control" id="auctionEndsAt" required>
          </div>
          <button type="submit" class="btn btn-primary">Create Auction</button>
      </form>
    `;
  } else {
    displayContainer.innerHTML = `
      <p>Please log in to create auctions.</p>
      <button id="loginButton" class="btn btn-primary">Log In</button>
    `;

    document.getElementById("loginButton").addEventListener("click", loadModal);
  }
}
