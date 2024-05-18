import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { getMainName } from '../global/localstorage.mjs'
import { PROFILES_URL } from '../global/variables.mjs'

const URLavatar = document.getElementById('URLavatar')
const mainName = getMainName()
export async function updateProfile() {
    try {
        const res = await dofetch(
            PROFILES_URL + `/${mainName}/media`,
            'PUT',
            true,
            {
                body: JSON.stringify({
                    avatar: URLavatar.value,
                }),
            }
        )
        if (!res) {
            createCustomModal(
                'Invalid URL!!',
                'text-danger',
                'Please make sure you have a valid URL.',
                'Try again'
            )
        } else {
            window.location.reload()
        }
    } catch {
        createCustomModal(
            'You are not allowed to view this page',
            'text-warning',
            'Please sign first to view this page.',
            'Sign in',
            () => {
                window.location.href =
                    '../sign/registering.html'
            }
        )
    }
}
