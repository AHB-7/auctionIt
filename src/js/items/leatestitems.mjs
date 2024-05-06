import { dofetch } from '../auth/fetch.mjs'
import { getItems } from './getitems.mjs'
import {
    LISTING_URL,
    leatestItemsContainer,
} from '../global/variables.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'

export async function leatestAuction() {
    try {
        const response = await dofetch(
            LISTING_URL,
            'GET',
            false
        )

        leatestItemsContainer.innerHTML = ''
        getItems(0, 3, leatestItemsContainer, response)
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
