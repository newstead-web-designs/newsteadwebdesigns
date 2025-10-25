// Get form and thank-you message elements
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMessage');

if (form) {
  form.addEventListener('submit', function(event) {
    // Only proceed if the form is valid
    if (form.checkValidity()) {
      event.preventDefault(); // prevent default submission

      // Submit form data to Netlify
      const formData = new FormData(form);
      fetch("/", {
        method: "POST",
        body: formData
      })
        .then(() => {
          form.style.display = 'none';        // Hide form
          thankYou.style.display = 'block';   // Show thank-you message
        })
        .catch((error) => alert("Error submitting form: " + error));
    } else {
      form.classList.add('was-validated'); // Show validation errors
    }
  });
}
