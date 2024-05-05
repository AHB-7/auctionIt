import {
    signInBtn,
    signInFormContainer,
    signUpBtn,
    signUpFormContainer,
} from '../global/variables.mjs'

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
// validation for bootstrap forms
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission

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
