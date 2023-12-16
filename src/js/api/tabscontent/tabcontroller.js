import { renderMarketplace } from "./marketplace/marketplace.js";
import { renderCreateAuctionForm } from "./createauction/renderauctionform.js";
import { handleAuctionCreation } from "./createauction/auctioncreation.js";
import { renderMyAuctions } from "./myauctions/myauctions.js";
import { renderUserProfile } from "./profile/profile.js";
import { renderHotAuctions } from "./hotauctions/hotauctions.js";
import { renderMyActiveBids } from "./mybids/renderuserbids.js";

export function initializeTabs() {
  const buttons = document.querySelectorAll(".button-group .btn");
  const profileName = localStorage.getItem("profileName");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const tabName = this.querySelector("img").alt;
      switch (tabName) {
        case "Marketplace":
          renderMarketplace();
          break;
        case "My Auctions":
          renderMyAuctions();
          break;
        case "Create Auction":
          renderCreateAuctionForm();
          handleAuctionCreation();
          break;
        case "Profile":
          renderUserProfile(profileName);
          break;
        case "Hot Auctions":
          renderHotAuctions();
          break;
        case "My Active Bids":
          renderMyActiveBids();
          break;
        default:
          console.log("Tab not found:", tabName);
      }
    });
  });
}
