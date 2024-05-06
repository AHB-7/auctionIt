import { itemCardNoAuth } from './itemcard.mjs'

export function getItems(counter, container, auction) {
    for (
        let i = 0;
        i < auction.length && i < counter;
        i++
    ) {
        const item = auction[i]
        container.appendChild(
            itemCardNoAuth(
                item.media || '',
                item.title,
                item._count ? item._count.bids : 'No bids'
            )
        )
    }
}
