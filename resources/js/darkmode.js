document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = [
    document.getElementById('darkModeToggleMobile'),
    document.getElementById('darkModeToggleDesktop')
  ].filter(Boolean);

  const body = document.body;
  const navbar = document.querySelector('.navbar');

  const sunIconClass = "fas fa-sun";
  const moonIconClass = "fas fa-moon";

  function setIcon(isDark) {
    const iconHTML = isDark ? `<i class="${sunIconClass}"></i>` : `<i class="${moonIconClass}"></i>`;
    toggleButtons.forEach(button => {
      button.innerHTML = iconHTML;
      button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      button.setAttribute('aria-pressed', isDark);
    });
  }

  function setNavbarTheme(isDark) {
    if (!navbar) return;
    navbar.classList.toggle('navbar-dark', isDark);
    navbar.classList.toggle('navbar-light', !isDark);
    navbar.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  }

  function setCarouselTheme(isDark) {
    const controls = document.querySelectorAll('#carouselIndicators .carousel-control-prev, #carouselIndicators .carousel-control-next');
    controls.forEach(control => control.setAttribute('data-bs-theme', isDark ? 'light' : 'dark'));

    const indicators = document.querySelectorAll('#carouselIndicators .carousel-indicators button');
    indicators.forEach(indicator => indicator.setAttribute('data-bs-theme', isDark ? 'light' : 'dark'));
  }

  function applyDarkMode(isDark, save = false) {
    body.classList.toggle('dark-mode', isDark);
    setNavbarTheme(isDark);
    setIcon(isDark);
    setCarouselTheme(isDark); // Update carousel controls & indicators only
    if (save) {
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    }
  }

  // Initial preference
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
    applyDarkMode(true);
  } else if (darkModePreference === 'disabled') {
    applyDarkMode(false);
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyDarkMode(systemPrefersDark);
    localStorage.setItem('darkMode', systemPrefersDark ? 'enabled' : 'disabled');
  }

  // Toggle on button click
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isNowDark = !body.classList.contains('dark-mode');
      applyDarkMode(isNowDark, true);
    });
  });

  // Optional: live system preference changes
  if (!darkModePreference) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      applyDarkMode(e.matches);
    });
  }
});
