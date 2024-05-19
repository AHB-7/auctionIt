import { createCarouselItem } from '../global/createcarouselitem.mjs'
import { creatItemCard } from '../global/creatitemcard.mjs'

export function getItems(
    startcounter,
    counter,
    container,
    auction
) {
    const endcounter = startcounter + counter 

    for (
        let i = startcounter;
        i < auction.length && i < endcounter;
        i++
    ) {
        const item = auction[i]
        let latestBidAmount = 'No Bids'

        if (item.bids.length >= 1) {
            const latestBid =
                item.bids[item.bids.length - 1]
            latestBidAmount = latestBid.amount
        }

        const itemCard = creatItemCard(
            item.media,
            item.title,
            latestBidAmount,
            item.id,
            ''
        )

        if (itemCard) {
            container.appendChild(itemCard)
        } else {
            console.error(
                `Failed to create item card for item with id: ${item.id}`
            )
        }
    }
}

export function getCarouselItems(
    startCounter,
    counter,
    container,
    auction
) {
    for (
        let i = startCounter;
        i < auction.length && i < counter;
        i++
    ) {
        const item = auction[i]
        const isActive =
            i === startCounter
                ? 'carousel-item active'
                : 'carousel-item'
        const latestBid = item.bids?.[
            item.bids.length - 1
        ] || { amount: 0 }
        const carouselItem = createCarouselItem(
            item.media || '',
            item.title,
            latestBid.amount,
            item.id,
            isActive
        )
        container.appendChild(carouselItem)
    }
}
