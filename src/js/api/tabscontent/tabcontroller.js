import { renderMarketplace } from "./marketplace.js";

export function initializeTabs() {
  const buttons = document.querySelectorAll(".button-group .btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const tabName = this.querySelector("img").alt;
      switch (tabName) {
        case "Marketplace":
          renderMarketplace();
          break;
        // future tab shenanigans
        default:
          console.log("Tab not found:", tabName);
      }
    });
  });
}
