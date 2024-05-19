import { auctionsContainer } from '../global/variables.mjs'
import { current } from '../items/getfeeditems.mjs'
import { getItems } from '../items/getitems.mjs'

/**
 * Sorts an array of items by their title in ascending order.
 *
 * @param {Array} items - The array of items to be sorted.
 */
export function sortItemsByTitle(items) {
    items.sort(function (a, b) {
        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        return 0
    })
    auctionsContainer.innerHTML = ''
    getItems(0, current, auctionsContainer, items)
}

/**
 * Sorts an array of items by the amount of their last bid in ascending order.
 *
 * @param {Array} items - The array of items to be sorted.
 */
export function sortItemsByLastBidLow(items) {
    items.sort((a, b) => {
        const lastBidA = a.bids[a.bids.length - 1]?.amount
        const lastBidB = b.bids[b.bids.length - 1]?.amount
        return lastBidA - lastBidB
    })
    auctionsContainer.innerHTML = ''
    getItems(0, current, auctionsContainer, items)
}

/**
 * Sorts an array of items by the amount of their last bid in descending order.
 *
 * @param {Array} items - The array of items to be sorted.
 */
export function sortItemsByLastBidHigh(items) {
    items.sort((a, b) => {
        const lastBidA = a.bids[a.bids.length - 1]?.amount
        const lastBidB = b.bids[b.bids.length - 1]?.amount
        return lastBidB - lastBidA
    })
    auctionsContainer.innerHTML = ''
    getItems(0, current, auctionsContainer, items)
}
