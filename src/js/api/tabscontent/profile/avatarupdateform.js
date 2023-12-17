export function renderAvatarUpdateForm() {
  return `
    <div class="avatar-update-container mt-4">
      <form id="updateAvatarForm" class="text-center">
        <div class="mb-3">
          <label for="avatarUrl" class="form-label">New Avatar URL</label>
          <input type="url" class="form-control" id="avatarUrl" required>
        </div>
        <button type="submit" class="btn btn-primary">Update Avatar</button>
      </form>
    </div>
  `;
}
