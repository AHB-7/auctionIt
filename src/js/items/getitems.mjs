import { createCarouselItem } from '../global/createcarouselitem.mjs'
import { creatItemCard } from '../global/creatitemcard.mjs'

export function getItems(
    startcounter,
    counter,
    container,
    auction
) {
    for (
        let i = startcounter;
        i < auction.length && i < counter;
        i++
    ) {
        const item = auction[i]
        if (item.bids.length > 0 && item.media) {
            const latestBid =
                item.bids[item.bids.length - 1]

            container.appendChild(
                creatItemCard(
                    item.media,
                    item.title,
                    latestBid.amount,
                    item.id,
                    ''
                )
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
