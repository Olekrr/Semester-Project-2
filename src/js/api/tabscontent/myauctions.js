import { fetchData } from "./apiservice.js";

export async function renderMyAuctions() {
  const profileName = localStorage.getItem("profileName");

  if (!profileName) {
    console.error("Profile name is undefined.");
    return;
  }

  const myListings = await fetchData(`profiles/${profileName}/listings`);
  const displayContainer = document.getElementById("templateDisplay");

  if (myListings?.length > 0) {
    displayContainer.innerHTML = myListings
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
    displayContainer.innerHTML =
      "<p>You have not created any auctions yet.</p>";
  }
}
