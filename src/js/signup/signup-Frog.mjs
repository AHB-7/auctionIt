import { dofetch } from '../auth/fetch.mjs'
import {
    REGISTER_URL,
    emailSignUp,
    passwordSignUp,
    signUpForm,
    userName,
} from '../global/variables.mjs'

export async function signUp() {
    signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        if (!signUpForm.checkValidity()) {
            signUpForm.classList.add('was-validated')
            return
        }
        try {
            const response = await dofetch(REGISTER_URL, 'post', false, {
                body: JSON.stringify({
                    name: userName.value,
                    email: emailSignUp.value,
                    password: passwordSignUp.value,
                }),
            })

            if (response.ok) {
                console.log('User registered')
            } else {
                console.error('Failed to register user:', response.status)
            }
        } catch (error) {
            console.error('Error during registration:', error)
        }
    })
}
