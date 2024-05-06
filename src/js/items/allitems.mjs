import { dofetch } from '../auth/fetch.mjs'
import { getItems } from '../global/getitems.mjs'
import {
    LISTING_URL,
    leatestItemsContainer,
} from '../global/variables.mjs'

export async function leatestAuction() {
    try {
        const response = await dofetch(
            LISTING_URL,
            'GET',
            false
        )
        console.log(response)
        leatestItemsContainer.innerHTML = ''
        getItems(3, leatestItemsContainer, response)
    } catch {
        console.error('Error')
    }
}
