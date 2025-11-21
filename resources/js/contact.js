// Grab the form element
const form = document.querySelector('form[name="contact"]');

// Grab all the service checkboxes (UI only)
const checkboxes = document.querySelectorAll('.form-check-input');

// Grab the hidden field that will be sent to Netlify
const hiddenField = document.getElementById('services_list');

/**
 * Updates the hidden field with only the selected services.
 * Each service is formatted as a bullet and separated by a single newline.
 */
function updateHiddenField() {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)        // Only checked boxes
    .map(cb => `- ${cb.value}`);     // Bullet formatting

  hiddenField.value = selected.join('\n'); // Join bullets with single newline
}

// Listen for checkbox changes to update the hidden field in real-time
checkboxes.forEach(cb => cb.addEventListener('change', updateHiddenField));

// Ensure hidden field is updated before form submission
form.addEventListener('submit', updateHiddenField);

// Initialize hidden field on page load (in case of pre-checked boxes)
updateHiddenField();
