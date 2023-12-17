export function bidHistory(bids) {
  const sortedBids = bids.sort((a, b) => b.amount - a.amount);
  let bidHistoryHtml = '<ul class="list-group list-group-flush">'; // Using Bootstrap's list group for styling
  if (sortedBids.length > 0) {
    sortedBids.forEach((bid) => {
      bidHistoryHtml += `
        <li class="list-group-item">
          <strong>${bid.bidderName}</strong>: $${bid.amount}
          <span class="text-muted" style="float: right;">(on ${new Date(
            bid.created,
          ).toLocaleString()})</span>
        </li>`;
    });
  } else {
    bidHistoryHtml += '<li class="list-group-item">No bids yet.</li>';
  }
  bidHistoryHtml += "</ul>";
  return bidHistoryHtml;
}
