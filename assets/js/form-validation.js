;(() => {
  'use strict'

  // Enables Bootstrap custom validation styles. Resets valid form on submit
  // @see https://getbootstrap.com/docs/5.3/forms/validation/#custom-styles */
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      if (!form.checkValidity()) {
        event.stopPropagation()
        form.classList.add('was-validated')
        return
      }

      form.classList.remove('was-validated')
      form.reset()
    })
  })

  // Set the max attribute of the publication year input to the current year
  const publicationYearInput = document.querySelector('#publicationYear')
  if (publicationYearInput) publicationYearInput.max = new Date().getFullYear()
})()
