(function () {
  'use strict'

  // Fetch all forms with class 'needs-validation'
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission if invalid
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()   // stop submission
          event.stopPropagation()  // stop event bubbling
        }
        form.classList.add('was-validated') // show validation feedback
      }, false)
    })
})()
