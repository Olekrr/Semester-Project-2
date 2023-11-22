import { toggleListener, loadModal } from "./loginmodal/index.js";
import {
  loginFormListener,
  registerFormListener,
} from "./api/formlisteners/index.js";

document.addEventListener("DOMContentLoaded", () => {
  loadModal();
  toggleListener();
  loginFormListener();
  registerFormListener();
});
