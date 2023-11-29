export function createAuctionFormHtml() {
  return `
        <form id="createAuctionForm">
            <div class="mb-3">
                <label for="auctionTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="auctionTitle" required>
            </div>
            <div class="mb-3">
                <label for="auctionDescription" class="form-label">Description</label>
                <textarea class="form-control" id="auctionDescription"></textarea>
            </div>
            <div class="mb-3" id="mediaUrls">
                <label class="form-label">Media URLs</label>
                <input type="url" class="form-control mb-2" name="auctionMedia">
                <button type="button" class="btn btn-secondary btn-sm" id="addMediaUrl">Add More Images</button>
            </div>
            <div class="mb-3">
                <label for="auctionEndsAt" class="form-label">Ends At</label>
                <input type="datetime-local" class="form-control" id="auctionEndsAt" required>
            </div>
            <button type="submit" class="btn btn-primary">Create Auction</button>
        </form>
    `;
}
