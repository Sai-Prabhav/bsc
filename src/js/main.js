// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle?.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  // Handle tab switching in Learning Hub
  const tabButtons = document.querySelectorAll('[data-tab]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;
      // Update active states
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      button.classList.add('active');
      document.querySelector(`[data-tab-panel="${target}"]`).classList.add('active');
    });
  });
});