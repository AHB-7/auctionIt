import { addAuthToken } from '../auth/authtoken.mjs'
import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import {
    addAvatar,
    addMainName,
} from '../global/localstorage.mjs'
import {
    LOGIN_URL,
    emailSignIn,
    passwordSignIn,
    signInForm,
} from '../global/variables.mjs'
import { getProfile } from '../profile/getprofile.mjs'

// Call function to create and append the modal

export function signIn() {
    signInForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        if (!signInForm.checkValidity()) {
            signInForm.classList.add('was-validated')
            return
        }
        try {
            const responseData = await dofetch(
                LOGIN_URL,
                'post',
                false,
                {
                    body: JSON.stringify({
                        email: emailSignIn.value,
                        password: passwordSignIn.value,
                    }),
                }
            )
            addMainName(responseData.name)
            addAvatar(responseData.avatar)
            if (!responseData) {
                createCustomModal(
                    'Invalid email or password',
                    'text-danger',
                    'Please make sure you have entered the correct email and password',
                    'Try again',
                    () => {
                        window.location.reload()
                    }
                )
            } else {
                addAuthToken(responseData.accessToken)
                let currentUrl = new URL(
                    window.location.href
                )
                currentUrl.pathname =
                    currentUrl.pathname.replace(
                        '/sign/registering.html',
                        '/feed/feed.html'
                    )
                window.location.href = currentUrl.toString()
            }
            getProfile()
        } catch {
            createCustomModal(
                'Something went wrong with the sign-in process',
                'text-danger',
                'Please try again later or try to use a different browser',
                'Try again',
                () => {
                    window.location.reload()
                }
            )
        }
    })
}
