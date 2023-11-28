import { fetchData } from "../apiservice.js";

export async function avatarUpdate(profileName) {
  document
    .getElementById("updateAvatarForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const avatarUrl = document.getElementById("avatarUrl").value;

      try {
        const updateData = { avatar: avatarUrl };
        console.log(
          `Updating avatar for ${profileName} with data:`,
          updateData,
        );

        await fetchData(`profiles/${profileName}/media`, "PUT", updateData);
        alert("Avatar updated successfully!");
        window.location.reload();
      } catch (error) {
        console.error("Error updating avatar:", error);
        alert("Error occurred while updating avatar.");
      }
    });
}
