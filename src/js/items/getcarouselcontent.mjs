import { dofetch } from '../auth/fetch.mjs'
import {
    LISTING_URL,
    carouselContainer,
} from '../global/variables.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { idReader } from '../global/idreder.mjs'
import { getCarouselItems } from './getitems.mjs'
import { createLoader } from '../global/loading.mjs'

export async function getCarouselContent() {
    createLoader(carouselContainer)
    try {
        const response = await dofetch(
            LISTING_URL +
                '/?limit=3&offset=50&_active=true&_seller=true&_bids=true',
            'GET',
            false
        )
        carouselContainer.innerHTML = ''
        getCarouselItems(0, 3, carouselContainer, response)
        idReader('.item-container')
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
