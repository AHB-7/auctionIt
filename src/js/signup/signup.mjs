import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import {
    REGISTER_URL,
    emailSignUp,
    passwordSignUp,
    signInFormContainer,
    signUpForm,
    signUpFormContainer,
    userName,
} from '../global/variables.mjs'

export async function signUp() {
    signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        if (!signUpForm.checkValidity()) {
            signUpForm.classList.add('was-validated') // Triggers Bootstrap validation styles
            return
        }
        try {
            const responseData = await dofetch(REGISTER_URL, 'POST', false, {
                body: JSON.stringify({
                    name: userName.value,
                    email: emailSignUp.value,
                    password: passwordSignUp.value,
                }),
            })
            if (!responseData) {
                createCustomModal(
                    'Invalid ifromation been received',
                    'text-danger',
                    'Click on the ! to insure your registration details are correct',
                    'Try again',
                    () => {
                        signUpFormContainer.classList.remove('d-none')
                        signInFormContainer.classList.add('d-none')
                        signUpForm.classList.remove('was-validated')
                    }
                )
            } else {
                createCustomModal(
                    'Welcome to the AuctionIt family',
                    'text-success',
                    'Your account has been successfully registered. Please sign in to continue.',
                    'Sign in',
                    () => {
                        window.location.reload()
                    }
                )
            }
        } catch {
            createCustomModal(
                'Something went wrong with the sign-in process',
                'text-danger',
                'Please try again later or try to use a different browser',
                'Try again',
                () => {
                    signUpFormContainer.classList.remove('d-none')
                    signInFormContainer.classList.add('d-none')
                }
            )
        }
    })
}
