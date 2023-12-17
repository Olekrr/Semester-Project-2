import { toggleForms } from "./toggleform.js";

export function toggleListener() {
  const toggleLinks = document.querySelectorAll(".toggle-link");
  toggleLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      toggleForms();
    });
  });
}
