export function loadModal() {
  var loginModal = new bootstrap.Modal(
    document.getElementById("loginRegisterModal"),
    {
      backdrop: "static",
      keyboard: false,
    },
  );
  loginModal.show();
}
