// Grab form, checkboxes, and hidden field
const form = document.querySelector('form[name="contact"]');
const checkboxes = document.querySelectorAll('.form-check-input'); // UI only
const hiddenField = document.getElementById('services_list'); // Sent to Netlify

// Function to update hidden field with selected services
function updateHiddenField() {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)       // Only checked boxes
    .map(cb => `- ${cb.value}`);    // Format as bullets

  hiddenField.value = selected.join('\n'); // Joins with line breaks
}

// Update hidden field on any checkbox change
checkboxes.forEach(cb => cb.addEventListener('change', updateHiddenField));

// Ensure hidden field is populated before submission
form.addEventListener('submit', updateHiddenField);

// Initialize on page load in case any boxes are pre-checked
updateHiddenField();
