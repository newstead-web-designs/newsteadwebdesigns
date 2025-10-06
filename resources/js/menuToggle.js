document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.getElementById('menuToggle');
  const icon = toggler?.querySelector('i');
  const menu = document.getElementById('navbarSupportedContent');

  if (!toggler || !icon || !menu) return;

  // Set icon based on Bootstrap collapse events
  menu.addEventListener('shown.bs.collapse', () => {
    icon.classList.replace('fa-bars', 'fa-times');
  });

  menu.addEventListener('hidden.bs.collapse', () => {
    icon.classList.replace('fa-times', 'fa-bars');
  });

  // Optional: toggle aria-expanded for accessibility
  toggler.addEventListener('click', () => {
    const expanded = toggler.getAttribute('aria-expanded') === 'true';
    toggler.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  });
});
