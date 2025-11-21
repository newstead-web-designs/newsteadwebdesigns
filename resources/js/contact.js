// Grab all checkboxes and hidden field
const checkboxes = document.querySelectorAll('input[name="services[]"]');
const hiddenField = document.getElementById('services_list');

// Function to update hidden field with checked services
function updateHiddenField() {
  const selected = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => `- ${cb.value}`); // Bullet formatting
  hiddenField.value = selected.join('\n'); // Each service on a new line
}

// Add event listeners to all checkboxes
checkboxes.forEach(cb => cb.addEventListener('change', updateHiddenField));

// Run once on page load in case any boxes are pre-checked
updateHiddenField();
