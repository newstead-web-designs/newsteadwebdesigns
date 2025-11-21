// Grab form, checkboxes, and hidden field
const form = document.querySelector('form[name="contact"]');
const checkboxes = document.querySelectorAll('input[name="services[]"]');
const hiddenField = document.getElementById('services_list');

// Function to update hidden field with selected services
function updateHiddenField() {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => `- ${cb.value}`); // bullet formatting

  // Populate hidden field; if none selected, leave it empty
  hiddenField.value = selected.join('\n');
}

// Update hidden field on checkbox change
checkboxes.forEach(cb => cb.addEventListener('change', updateHiddenField));

// Ensure hidden field is populated before submission
form.addEventListener('submit', updateHiddenField);

// Initialize on page load
updateHiddenField();
