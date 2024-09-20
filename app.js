document.addEventListener('DOMContentLoaded', () => {
  const searchSection = document.getElementById('search-section');
  const packageListingSection = document.getElementById('package-listing-section');
  const packageDetailsSection = document.getElementById('package-details-section');
  const bookingSection = document.getElementById('booking-section');
  const packageList = document.getElementById('package-list');
  const packageDetails = document.getElementById('package-details');

  // Mock API Data (or fetch from /data/packages.json)
  const travelPackages = [
    { id: 1, destination: "Paris", price: 1200, rating: 4.5, description: "Enjoy the city of lights." },
    { id: 2, destination: "Tokyo", price: 1500, rating: 4.7, description: "Experience the vibrant city." },
    { id: 3, destination: "Bali", price: 900, rating: 4.3, description: "Relax in paradise." }
  ];

  // Show/Hide Sections
  function showSection(section) {
    [searchSection, packageListingSection, packageDetailsSection, bookingSection].forEach(sec => sec.classList.add('hidden'));
    section.classList.remove('hidden');
  }

  // Show search section by default
  showSection(searchSection);

  // Search Form Submission
  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const budget = document.getElementById('budget').value;

    // Filter packages based on search criteria
    const filteredPackages = travelPackages.filter(pkg =>
      pkg.destination.toLowerCase().includes(destination.toLowerCase()) &&
      pkg.price <= budget
    );

    // Render filtered packages
    packageList.innerHTML = '';
    filteredPackages.forEach(pkg => {
      const packageCard = document.createElement('div');
      packageCard.classList.add('package-card');
      packageCard.innerHTML = `
        <h3>${pkg.destination}</h3>
        <p>Price: $${pkg.price}</p>
        <p>Rating: ${pkg.rating}</p>
        <button class="view-details" data-id="${pkg.id}">View Details</button>
      `;
      packageList.appendChild(packageCard);
    });

    // Show listing section
    showSection(packageListingSection);

    // View Details Button Event
    document.querySelectorAll('.view-details').forEach(button => {
      button.addEventListener('click', (e) => {
        const packageId = e.target.getAttribute('data-id');
        const selectedPackage = travelPackages.find(pkg => pkg.id == packageId);

        // Display selected package details
        packageDetails.innerHTML = `
          <h3>${selectedPackage.destination}</h3>
          <p>${selectedPackage.description}</p>
          <p>Price: $${selectedPackage.price}</p>
          <p>Rating: ${selectedPackage.rating}</p>
        `;
        showSection(packageDetailsSection);
      });
    });
  });

  // Booking Flow
  document.getElementById('book-now').addEventListener('click', () => {
    showSection(bookingSection);
  });

  // Form Validation and Booking
  document.getElementById('booking-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking successful!');
    showSection(searchSection);
  });

  // Back buttons
  document.getElementById('back-to-listing').addEventListener('click', () => {
    showSection(packageListingSection);
  });
  document.getElementById('back-to-details').addEventListener('click', () => {
    showSection(packageDetailsSection);
  });
  document.getElementById('back-to-search').addEventListener('click', () => {
    showSection(searchSection);
  });
});
