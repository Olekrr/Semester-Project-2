import { toggleListener, loadModal } from "./loginmodal/index.js";
import {
  loginFormListener,
  registerFormListener,
} from "./api/formlisteners/index.js";
import { initializeTabs } from "./api/tabscontent/tabcontroller.js";

document.addEventListener("DOMContentLoaded", () => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    loadModal();
  }
  toggleListener();
  loginFormListener();
  registerFormListener();

  if (authToken) {
    initializeTabs();
  }
});
