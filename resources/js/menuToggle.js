// =======================
// Navbar Toggle Script
// =======================

// Function to close navbar when a link is clicked
function menuToggle() {
  var navToggler = document.querySelector('.navbar-toggler');
  var navCollapse = document.querySelector('.navbar-collapse');
  var icon = navToggler.querySelector('i');

  if (navCollapse.classList.contains('show')) {
    // Collapse the navbar
    navCollapse.classList.remove('show');
    // Change the toggle icon back to the bars icon
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}

// Toggle navbar icon between bars and times
var navbarToggler = document.querySelector('.navbar-toggler');

if (navbarToggler) {
  navbarToggler.addEventListener('click', function () {
    var icon = navbarToggler.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
}

// Automatically close navbar when a nav link is clicked
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', menuToggle);
});

// Reset icon when the Bootstrap collapse hides (for safety)
var navCollapse = document.querySelector('.navbar-collapse');
if (navCollapse) {
  navCollapse.addEventListener('hidden.bs.collapse', function () {
    var icon = navbarToggler.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
}
