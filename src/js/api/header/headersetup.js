import { getUserData } from "./userdata.js";

export async function setupHeader() {
  const userData = await getUserData();
  if (userData) {
    document.getElementById("userProfilePic").src = userData.avatar;
    document.getElementById("userCredits").textContent =
      `Credits: ${userData.credits}`;
  }

  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
  });
}
