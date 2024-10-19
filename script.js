const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle visibility of menu on mobile
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});
