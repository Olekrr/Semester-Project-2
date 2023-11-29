import { showFeedbackModal } from "./feedbackmodal.js";
import {
  networkErrorMessage,
  serverErrorMessage,
  badRequestErrorMessage,
  serviceUnavailableMessage,
} from "./errormessages.js";

export function handleError(error) {
  console.error("Error: ", error);

  if (error.message.includes("Failed to fetch")) {
    showFeedbackModal("Network Error", networkErrorMessage());
  } else if (error.message.includes("400")) {
    showFeedbackModal("Invalid Data", badRequestErrorMessage());
  } else if (error.message.includes("500")) {
    showFeedbackModal("Server Error", serverErrorMessage());
  } else if (error.message.includes("503")) {
    showFeedbackModal("Service Unavailable", serviceUnavailableMessage());
  } else {
    showFeedbackModal(
      "Error",
      "An unexpected error occurred. Please try again.",
    );
  }
}
