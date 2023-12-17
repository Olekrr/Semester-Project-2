export function renderProfileInfo(profile) {
  return `
      <div class="profile-container d-flex flex-column align-items-center text-center">
        <img src="${profile.avatar}" alt="Avatar" class="profile-avatar mb-3 rounded-circle" style="width: 150px; height: 150px; object-fit: cover;">
        <h3 class="mb-2">${profile.name}</h3>
        <p class="mb-1"><strong>Email:</strong> ${profile.email}</p>
        <p class="mb-1"><strong>Credits:</strong> ${profile.credits}</p>
        <p class="mb-1"><strong>Total Listings:</strong> ${profile._count.listings}</p>
      </div>
    `;
}
