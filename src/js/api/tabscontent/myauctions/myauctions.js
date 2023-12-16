import { fetchData } from "../../apiservice.js";
import { loadModal } from "../../../loginmodal/index.js";
import { createListingCard } from "../listingcard.js";

export async function renderMyAuctions() {
  const profileName = localStorage.getItem("profileName");
  const displayContainer = document.getElementById("templateDisplay");

  if (profileName) {
    const myListings = await fetchData(`profiles/${profileName}/listings`);

    if (myListings?.length > 0) {
      displayContainer.innerHTML = myListings
        .map((listing) => createListingCard(listing))
        .join("");
    } else {
      displayContainer.innerHTML =
        "<p>You have not created any auctions yet.</p>";
    }
  } else {
    displayContainer.innerHTML = `
      <p>Please log in to view your auctions.</p>
      <button id="loginButton" class="btn btn-primary">Log In</button>
    `;

    document.getElementById("loginButton").addEventListener("click", loadModal);
  }
}
