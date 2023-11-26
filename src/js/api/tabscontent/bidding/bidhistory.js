export function bidHistory(bids) {
  const sortedBids = bids.sort((a, b) => b.amount - a.amount);
  let bidHistoryHtml = '<ul class="list-unstyled">';
  if (sortedBids.length > 0) {
    sortedBids.forEach((bid) => {
      bidHistoryHtml += `<li>${bid.bidderName}: $${bid.amount} (on ${new Date(
        bid.created,
      ).toLocaleString()})</li>`;
    });
  } else {
    bidHistoryHtml += "<li>No bids yet.</li>";
  }
  bidHistoryHtml += "</ul>";
  return bidHistoryHtml;
}
