import { dofetch } from '../auth/fetch.mjs'
import {
    LISTING_URL,
    leatestItemsContainer,
} from '../global/variables.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { getItems } from './getitems.mjs'

export async function getLeatestAuction() {
    try {
        const response = await dofetch(
            LISTING_URL + '/?_bids=true',
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
