;(() => {
  'use strict'

  /* Bootstrap provides custom styles for form validation feedback. This enables those styles by adding the 'was-validated' class to the form when it is submitted, and prevents submission if the form is invalid. If the form is valid, it resets the form and removes the validation styles.
  @see https://getbootstrap.com/docs/5.3/forms/validation/#custom-styles */
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      // Check form validity
      if (!form.checkValidity()) {
        event.stopPropagation()
        form.classList.add('was-validated')
        return
      }

      // Reset form after successful validation
      form.classList.remove('was-validated')
      form.reset()
    })
  })

  // Set the max attribute of the publication year input to the current year to prevent future years from being selected.
  const publicationYearInput = document.querySelector('#publicationYear')
  if (publicationYearInput) publicationYearInput.max = new Date().getFullYear()
})()
