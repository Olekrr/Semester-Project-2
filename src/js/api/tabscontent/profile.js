import { fetchData } from "./apiservice.js";

export async function renderUserProfile(profileName) {
  const profile = await fetchData(`profiles/${profileName}`);
  const displayContainer = document.getElementById("templateDisplay");

  if (profile) {
    displayContainer.innerHTML = `
      <div class="profile-container">
        <img src="${profile.avatar}" alt="Avatar" class="profile-avatar">
        <h3>${profile.name}</h3>
        <p>Email: ${profile.email}</p>
        <p>Credits: ${profile.credits}</p>
        <p>Total Listings: ${profile._count.listings}</p>
      </div>
    `;
  } else {
    displayContainer.innerHTML = "<p>Profile information not available.</p>";
  }
}
