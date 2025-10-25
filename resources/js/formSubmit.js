// Form submission JS: handles showing thank-you message after form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Check HTML5 validation first
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // Prepare form data for Netlify
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(function () {
        // Hide form and show thank-you message
        form.style.display = "none";
        thankYouMessage.style.display = "block";

        // Optionally, reset form fields
        form.reset();
        form.classList.remove("was-validated");
      })
      .catch(function (error) {
        console.error("Form submission error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  });
});
