const feedbackModalElement = document.getElementById("feedbackModal");
const feedbackModal = new bootstrap.Modal(feedbackModalElement, {
  keyboard: false,
});

export function showFeedbackModal(title, message) {
  const modalTitle = document.getElementById("feedbackModalLabel");
  const modalBody = document.getElementById("feedbackModalBody");
  modalTitle.textContent = title;
  modalBody.textContent = message;

  feedbackModal.show();
}
