export function renderAvatarUpdateForm() {
  return `
      <form id="updateAvatarForm">
        <div class="mb-3">
          <label for="avatarUrl" class="form-label">New Avatar URL</label>
          <input type="url" class="form-control" id="avatarUrl" required>
        </div>
        <button type="submit" class="btn btn-primary">Update Avatar</button>
      </form>
    `;
}
