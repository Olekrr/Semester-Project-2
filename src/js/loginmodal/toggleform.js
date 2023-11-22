export function toggleForms() {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");
  var modalTitle = document.getElementById("modalTitle");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    modalTitle.textContent = "Login";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    modalTitle.textContent = "Register";
  }
}
