import { fetchData } from "../apiservice.js";
import { renderProfileInfo } from "./profiledisplay.js";
import { renderAvatarUpdateForm } from "./avatarupdateform.js";
import { avatarUpdate } from "./eventlistener.js";
import { loadModal } from "../../../loginmodal/loadform.js";

export async function renderUserProfile() {
  const profileName = localStorage.getItem("profileName");
  const displayContainer = document.getElementById("templateDisplay");

  if (profileName) {
    const profile = await fetchData(`profiles/${profileName}`);
    if (profile) {
      displayContainer.innerHTML =
        renderProfileInfo(profile) + renderAvatarUpdateForm();
      avatarUpdate(profileName);
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
