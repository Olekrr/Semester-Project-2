import { showFeedbackModal } from "./feedbackmodal.js";
import {
  networkErrorMessage,
  serverErrorMessage,
  badRequestErrorMessage,
  serviceUnavailableMessage,
  profileAlreadyExists,
  unexpectedError,
} from "./errormessages.js";

export function handleError(error) {
  if (
    error.message === "Network Error" ||
    error.message === "Failed to fetch" ||
    error.name === "TypeError"
  ) {
    showFeedbackModal("Network Error", networkErrorMessage());
    return;
  }

  if (error.message) {
    if (error.message.includes("Profile already exists")) {
      showFeedbackModal("Registration Error", profileAlreadyExists());
    } else if (error.message.includes("400")) {
      showFeedbackModal("Invalid Data", badRequestErrorMessage());
    } else if (error.message.includes("500")) {
      showFeedbackModal("Server Error", serverErrorMessage());
    } else if (error.message.includes("503")) {
      showFeedbackModal("Service Unavailable", serviceUnavailableMessage());
    } else {
      showFeedbackModal("Error", unexpectedError());
    }
  } else {
    showFeedbackModal("Error", unexpectedError());
  }
}
