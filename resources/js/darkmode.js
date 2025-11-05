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
    const iconHTML = isDark
      ? `<i class="${sunIconClass}"></i>`
      : `<i class="${moonIconClass}"></i>`;
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

  function applyDarkMode(isDark, save = false) {
    body.classList.toggle('dark-mode', isDark);
    setNavbarTheme(isDark);
    setIcon(isDark);
    if (save) {
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    }
  }

  // **Force dark mode as default**
  applyDarkMode(true, true); // true = dark mode, save to localStorage

  // Toggle dark mode on button click
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isNowDark = !body.classList.contains('dark-mode');
      applyDarkMode(isNowDark, true);
    });
  });
});
