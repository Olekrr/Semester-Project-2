export function filterUserBids(allListings, userBids) {
  const userBidListingIds = userBids.map((bid) => bid.listingId);

  return allListings.filter(
    (listing) => listing.active && userBidListingIds.includes(listing.id),
  );
}
