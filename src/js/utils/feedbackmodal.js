export function showFeedbackModal(title, message) {
  const modalTitle = document.getElementById("feedbackModalLabel");
  const modalBody = document.getElementById("feedbackModalBody");
  modalTitle.textContent = title;
  modalBody.textContent = message;

  const feedbackModal = new bootstrap.Modal(
    document.getElementById("feedbackModal"),
  );
  feedbackModal.show();
}
