export function loadModal() {
  document.addEventListener("DOMContentLoaded", function () {
    var loginModal = new bootstrap.Modal(
      document.getElementById("loginRegisterModal"),
      {
        backdrop: "static",
        keyboard: false,
      },
    );
    loginModal.show();
  });
}
