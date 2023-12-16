import { fetchData } from "../apiservice.js";
import { handleError } from "../../utils/errorhandler.js";

export async function getUserData() {
  const username = localStorage.getItem("profileName");
  if (!username) {
    return null;
  }

  try {
    const profileData = await fetchData(`profiles/${username}`);
    return {
      name: profileData.name,
      email: profileData.email,
      avatar: profileData.avatar,
      credits: profileData.credits,
    };
  } catch (error) {
    handleError(error);
    return null;
  }
}
