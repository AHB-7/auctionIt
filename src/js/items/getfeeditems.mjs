import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { getItems } from './getitems.mjs'
import {
    LISTING_URL,
    auctionsContainer,
    showMoreActions,
} from '../global/variables.mjs'
import { addId } from '../global/localstorage.mjs'

let current = 18

export async function getFeedItems() {
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
        const itemCards = document.querySelectorAll(
            '.item-container'
        )
        itemCards.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                console.log(item.id)
                addId(item.id)
            })
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
