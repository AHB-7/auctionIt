import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { getItems } from './getitems.mjs'
import {
    LISTING_URL,
    auctionsContainer,
} from '../global/variables.mjs'
import { idReader } from '../global/idreder.mjs'
import { attachEventListeners } from '../feedsfunction/evenets.mjs'
import { createLoader } from '../global/loading.mjs'

export let current = 23

export async function getFeedItems() {
    createLoader(auctionsContainer)
    try {
        const response = await dofetch(
            LISTING_URL + '?_seller=true&_bids=true',
            'GET',
            false
        )
        auctionsContainer.innerHTML = ''
        getItems(0, current, auctionsContainer, response)

        attachEventListeners(response)
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
    } finally {
        idReader('.item-container')
    }
}
