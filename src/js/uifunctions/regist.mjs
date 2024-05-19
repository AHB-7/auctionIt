import {
    signInBtn,
    signInFormContainer,
    signUpBtn,
    signUpFormContainer,
} from '../global/variables.mjs'

/**
 * Toggles between the sign-in and sign-up forms when the respective buttons are clicked.
 */

// Add event listener to the sign-in button to show the sign-in form and hide the sign-up form
signInBtn.addEventListener('click', function () {
    if (signInFormContainer.classList.contains('d-none')) {
        signInFormContainer.classList.remove('d-none')
        signUpFormContainer.classList.add('d-none')
    }
})

// Add event listener to the sign-up button to show the sign-up form and hide the sign-in form
signUpBtn.addEventListener('click', function () {
    if (signUpFormContainer.classList.contains('d-none')) {
        signUpFormContainer.classList.remove('d-none')
        signInFormContainer.classList.add('d-none')
    }
})

/**
 * Adds validation to forms with the 'needs-validation' class. Prevents form submission if validation fails.
 */

// Select all forms with the 'needs-validation' class
const forms = document.querySelectorAll('.needs-validation')

// Add event listener to each form to validate on submit
Array.from(forms).forEach((form) => {
    form.addEventListener(
        'submit',
        (event) => {
            // Prevent form submission if validation fails
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            // Add 'was-validated' class to the form
            form.classList.add('was-validated')
        },
        false
    )
})
