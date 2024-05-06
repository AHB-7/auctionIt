import { dofetch } from '../auth/fetch.mjs'
import { getCarouselItems } from './getitems.mjs'
import {
    LISTING_URL,
    carouselContainer,
} from '../global/variables.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'

export async function carouselContent() {
    try {
        const response = await dofetch(
            LISTING_URL,
            'GET',
            false
        )

        carouselContainer.innerHTML = ''
        getCarouselItems(0, 3, carouselContainer, response)
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
