import { loadModal } from "../../../loginmodal/index.js";
import { createAuctionFormHtml } from "./createauctionform.js";
import { attachMediaUrlEvent } from "./mediaurlmanager.js";

export function renderCreateAuctionForm() {
  const profileName = localStorage.getItem("profileName");
  const displayContainer = document.getElementById("templateDisplay");

  if (profileName) {
    displayContainer.innerHTML = createAuctionFormHtml();
    attachMediaUrlEvent();
  } else {
    displayContainer.innerHTML = `
            <p>Please log in to create auctions.</p>
            <button id="loginButton" class="btn btn-primary">Log In</button>
        `;

    document.getElementById("loginButton").addEventListener("click", loadModal);
  }
}
