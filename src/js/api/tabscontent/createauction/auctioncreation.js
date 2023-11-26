import { fetchData } from "../apiservice.js";

export async function handleAuctionCreation() {
  const form = document.getElementById("createAuctionForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("auctionTitle").value;
    const description = document.getElementById("auctionDescription").value;
    const media = document.getElementById("auctionMedia").value
      ? [document.getElementById("auctionMedia").value]
      : [];
    const endsAt = document.getElementById("auctionEndsAt").value;

    try {
      const response = await fetchData("listings", "POST", {
        title,
        description,
        media,
        endsAt,
      });

      if (response) {
        console.log("Auction created:", response);
      }
    } catch (error) {
      console.error("Error creating auction:", error);
    }
  });
}
