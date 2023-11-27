import { fetchData } from "./apiservice.js";
import { loadModal } from "../../loginmodal/index.js";

export async function renderUserProfile() {
  const profileName = localStorage.getItem("profileName");
  const displayContainer = document.getElementById("templateDisplay");

  if (profileName) {
    const profile = await fetchData(`profiles/${profileName}`);

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
  } else {
    displayContainer.innerHTML = `
      <p>Please log in to view your profile.</p>
      <button id="loginButton" class="btn btn-primary">Log In</button>
    `;

    document.getElementById("loginButton").addEventListener("click", loadModal);
  }
}
