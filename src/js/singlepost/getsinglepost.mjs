import { dofetch } from '../auth/fetch.mjs'
import { calculateTimeRemaining } from '../global/calculatetimeremaining.mjs'
import { createSinglePost } from '../global/creatsinglepost.mjs'
import { getId } from '../global/localstorage.mjs'
import {
    LISTING_URL,
    singleitemContainer,
} from '../global/variables.mjs'

export async function getSingleItem() {
    try {
        const response = await dofetch(
            `${LISTING_URL}/${getId()}?_seller=true&_bids=true`,
            'GET',
            false
        )
        console.log(response)

        const bids =
            response.bids.length > 0
                ? response.bids[response.bids.length - 1]
                      .amount
                : 'No bids'
        const created = new Date(
            response.created
        ).toLocaleDateString()
        const endAt = new Date(
            response.endsAt
        ).toLocaleDateString()
        const timeRemainingCalculated =
            calculateTimeRemaining(endAt)

        singleitemContainer.appendChild(
            createSinglePost(
                response.seller.avatar,
                response.media[0],
                response.seller.name,
                response.title,
                bids,
                created,
                endAt,
                response.description,
                timeRemainingCalculated,
                response.bids
            )
        )
    } catch (err) {
        console.error('Error fetching item details:', err)
    }
}
