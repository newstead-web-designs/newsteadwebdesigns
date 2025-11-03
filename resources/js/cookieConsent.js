document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieConsent");
  const acceptBtn = document.getElementById("acceptCookies");

  // Show banner only if consent not given
  if (!localStorage.getItem("cookieConsent")) {
    cookieBanner.classList.remove("d-none");
  } else {
    loadNonEssentialScripts();
  }

  // Accept button click
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "true");
    cookieBanner.classList.add("d-none");
    loadNonEssentialScripts();
  });

  // Function to load GA and Facebook Pixel scripts
  function loadNonEssentialScripts() {
    if (!window.scriptsLoaded) {
      // Google Analytics
      const gaScript = document.createElement("script");
      gaScript.src = "resources/js/analytics.js";
      gaScript.async = true;
      document.body.appendChild(gaScript);

      // Facebook Pixel
      const fbScript = document.createElement("script");
      fbScript.src = "resources/js/fbpixel.js";
      fbScript.async = true;
      document.body.appendChild(fbScript);

      window.scriptsLoaded = true;
    }
  }
});
