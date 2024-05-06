import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import {
    LISTING_URL,
    auctionsContainer,
    showMoreActions,
} from '../global/variables.mjs'
import { getItems } from './getitems.mjs'

let current = 18

export async function feedItems() {
    try {
        const response = await dofetch(
            LISTING_URL,
            'GET',
            false
        )
        auctionsContainer.innerHTML = ''
        getItems(0, current, auctionsContainer, response)
        showMoreActions.addEventListener('click', () => {
            getItems(
                current,
                current + 9,
                auctionsContainer,
                response
            )
            current += 9
        })
    } catch {
        createCustomModal(
            'Something went wrong',
            'text-warning',
            'Please try reload the page or try again or try again later.',
            'Reload Now',
            () => {
                window.location.reload()
            }
        )
    }
}
