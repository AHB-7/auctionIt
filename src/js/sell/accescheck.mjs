import { getAuthToken } from '../auth/authtoken.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { isLocalhost } from '../global/variables.mjs'

const accessKey = getAuthToken()
export function accessCheck() {
    if (!accessKey || accessKey.length <= 1) {
        createCustomModal(
            'Ops Ops!',
            'text-warning',
            'It seems you are not signed in, please sign in to continue!',
            'Sign In',
            () => {
                let signInLink =
                    '/auctionIt/auth/sign/registering.html'
                if (isLocalhost()) {
                    let signInLink =
                        '/auth/sign/registering.html'
                    window.location.href = signInLink
                } else {
                    window.location.href = signInLink
                }
            },
            ''
        )
    }
}
