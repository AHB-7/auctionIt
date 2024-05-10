// import { filterNewest } from '../global/variables.mjs'

import { idReader } from '../global/idreder.mjs'
import {
    auctionsContainer,
    filterNewest,
    showMoreActions,
} from '../global/variables.mjs'
import { getItems } from '../items/getitems.mjs'

let attachedListeners = false

let current = 18

export function attachEventListeners(data) {
    if (!attachedListeners) {
        showMoreActions.addEventListener('click', () => {
            getItems(
                current,
                current + 9,
                auctionsContainer,
                data
            )
            current += 9
            idReader('.item-container')
        })

        filterNewest.addEventListener(
            'change',
            function () {
                if (this.checked) {
                    sortItemsByTitle(data)
                }
                idReader('.item-container')
            }
        )
    }
    true
}
function sortItemsByTitle(items) {
    items.sort((a, b) => a.title.localeCompare(b.title))
    auctionsContainer.innerHTML = ''
    getItems(0, current, auctionsContainer, items)
}
function sortItemsByPrice(items) {
    items.sort((a, b) => a.price.localeCompare(b.price))
    auctionsContainer.innerHTML = ''
    getItems(0, current, auctionsContainer, items)
}
