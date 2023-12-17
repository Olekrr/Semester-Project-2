import { getUserData } from "./userdata.js";
import { loadModal } from "../../loginmodal/loadform.js";

export async function setupHeader() {
  await refreshHeader();
}

export async function refreshHeader() {
  const userData = await getUserData();
  const authButton = document.getElementById("logoutButton");

  if (userData) {
    document.getElementById("userProfilePic").src = userData.avatar;
    document.getElementById("userCredits").textContent =
      `Credits: ${userData.credits}`;
    authButton.textContent = "Logout";
    authButton.classList.remove("btn-primary");
    authButton.classList.add("btn-outline-danger");
    authButton.removeEventListener("click", loadModal);
    authButton.addEventListener("click", logoutFunction);
  } else {
    document.getElementById("userCredits").textContent = "";
    authButton.textContent = "Login";
    authButton.classList.remove("btn-outline-danger");
    authButton.classList.add("btn-primary");
    authButton.removeEventListener("click", logoutFunction);
    authButton.addEventListener("click", loadModal);
  }
}

function logoutFunction() {
  localStorage.clear();
  window.location.reload();
}
