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
        container.appendChild(
            creatItemCard(
                item.media || '',
                item.title,
                item._count ? item._count.bids : 'No bids',
                item.id
            )
        )
    }
}
export function getCarouselItems(
    startcounter,
    counter,
    container,
    auction
) {
    for (
        let i = startcounter;
        i < auction.length && i < startcounter + counter;
        i++
    ) {
        const item = auction[i]
        const isActive = i === startcounter
        const carouselItem = createCarouselItem(
            item.media || '',
            item.title,
            item._count ? item._count.bids : 'No bids',
            item.id,
            isActive
        )
        container.appendChild(carouselItem)
    }
}