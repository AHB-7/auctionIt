const signUp = document.querySelector('#signUp')
const signIn = document.querySelector('#signIn')
const signUpForm = document.querySelector('#signUpForm')
const signInForm = document.querySelector('#signInForm')

signIn.addEventListener('click', function () {
    if (signInForm.classList.contains('d-none')) {
        signInForm.classList.remove('d-none')
        signUpForm.classList.add('d-none')
    }
})
signUp.addEventListener('click', function () {
    if (signUpForm.classList.contains('d-none')) {
        signUpForm.classList.remove('d-none')
        signInForm.classList.add('d-none')
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
