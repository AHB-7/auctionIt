import { getAuthToken } from '../auth/authtoken.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'

const accessKey = getAuthToken()
export function accessCheck() {
    if (!accessKey || accessKey.length <= 1) {
        createCustomModal(
            'Ops Ops!',
            'text-warning',
            'It seems you are not signed in, please sign in to continue!',
            'Sign In',
            () => {
                window.location.href =
                    '/auctionIt/auth/sign/registering.html'
            },
            ''
        )
    }
}
