import { fetchData } from "../apiservice.js";

export async function fetchUserBids(username) {
  return await fetchData(`profiles/${username}/bids?_listing=true`);
}
