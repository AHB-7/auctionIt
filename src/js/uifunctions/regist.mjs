import {
    signInBtn,
    signInFormContainer,
    signUpBtn,
    signUpFormContainer,
} from '../global/variables.mjs'

// this function is used to toggle between the sign in and sign up forms

signInBtn.addEventListener('click', function () {
    if (signInFormContainer.classList.contains('d-none')) {
        signInFormContainer.classList.remove('d-none')
        signUpFormContainer.classList.add('d-none')
    }
})
signUpBtn.addEventListener('click', function () {
    if (signUpFormContainer.classList.contains('d-none')) {
        signUpFormContainer.classList.remove('d-none')
        signInFormContainer.classList.add('d-none')
    }
})

// This JavaScript function targets all forms with the class 'needs-validation'.
//It listens for form submissions and checks if each form is valid.
//If a form is invalid, it prevents the default submission behavior and stops event propagation.
//Finally, it adds the 'was-validated' class to the form, which visually indicates to the user that validation has occurred.

const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach((form) => {
    form.addEventListener(
        'submit',
        (event) => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        },
        false
    )
})
