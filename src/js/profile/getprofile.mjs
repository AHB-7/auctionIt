import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { PROFILES_URL } from '../global/variables.mjs'
// import { createProfileHeader } from './profileheader.mjs'

export async function getProfile() {
    try {
        const r = await dofetch(
            PROFILES_URL + `/AlanB?_listings=true`,
            'GET',
            true
        )
        console.log(r)
        // createProfileHeader(
        //     r.avatar,
        //     r.name,
        //     r.email,
        //     r.credits
        // )
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
