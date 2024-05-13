// import { filterNewest } from '../global/variables.mjs'

import { idReader } from '../global/idreder.mjs'
import {
    auctionsContainer,
    filterAa,
    filterHigh,
    filterLow,
    showMoreActions,
} from '../global/variables.mjs'
import { getItems } from '../items/getitems.mjs'
import {
    sortItemsByLastBidHigh,
    sortItemsByLastBidLow,
    sortItemsByTitle,
} from './sort.mjs'

let attachedListeners = false

let current = 23

export function attachEventListeners(data) {
    if (!attachedListeners) {
        showMoreActions.addEventListener('click', () => {
            getItems(
                current,
                current + 18,
                auctionsContainer,
                data
            )
            current += 9
            idReader('.item-container')
        })

        filterAa.addEventListener('change', function () {
            if (this.checked) {
                sortItemsByTitle(data)
            }
            idReader('.item-container')
        })

        filterLow.addEventListener('change', function () {
            if (this.checked) {
                sortItemsByLastBidLow(data)
            }
            idReader('.item-container')
        })
        filterHigh.addEventListener('change', function () {
            if (this.checked) {
                sortItemsByLastBidHigh(data)
            }
            idReader('.item-container')
        })
    }

    true
}
