import { dofetch } from '../auth/fetch.mjs'
import { getCarouselItems } from './getitems.mjs'
import {
    LISTING_URL,
    carouselContainer,
} from '../global/variables.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { idReader } from '../global/idreder.mjs'

export async function getCarouselContent() {
    try {
        const response = await dofetch(
            LISTING_URL + '/?_bids=true',
            'GET',
            false
        )
        carouselContainer.innerHTML = ''
        getCarouselItems(0, 3, carouselContainer, response)
        idReader()
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
