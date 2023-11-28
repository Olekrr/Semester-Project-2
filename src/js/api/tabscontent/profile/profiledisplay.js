export function renderProfileInfo(profile) {
  return `
      <div class="profile-container">
        <img src="${profile.avatar}" alt="Avatar" class="profile-avatar">
        <h3>${profile.name}</h3>
        <p>Email: ${profile.email}</p>
        <p>Credits: ${profile.credits}</p>
        <p>Total Listings: ${profile._count.listings}</p>
      </div>
    `;
}
