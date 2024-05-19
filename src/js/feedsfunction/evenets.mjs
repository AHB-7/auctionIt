// import { filterNewest } from '../global/variables.mjs'

import { dofetch } from '../auth/fetch.mjs'
import { idReader } from '../global/idreder.mjs'
import {
    LISTING_URL,
    auctionsContainer,
    filterAa,
    filterHigh,
    filterLow,
    filteractive,
    showMoreActions,
} from '../global/variables.mjs'
import { getFeedItems } from '../items/getfeeditems.mjs'
import { getItems } from '../items/getitems.mjs'
import {
    sortItemsByLastBidHigh,
    sortItemsByLastBidLow,
    sortItemsByTitle,
} from './sort.mjs'

let current = 23
let attachedListeners = false

export function attachEventListeners() {
    let updateCurrent = current + 23
    if (!attachedListeners) {
        showMoreActions.addEventListener('click', () => {
            fetchItems(
                `${LISTING_URL}?offset=${updateCurrent}&_seller=true&_bids=true`,
                (data) => {
                    getItems(
                        current,
                        23,
                        auctionsContainer,
                        data
                    )
                    current += 23
                    idReader('.item-container')
                }
            )
        })

        filterLow.addEventListener('change', function () {
            if (this.checked) {
                fetchItems(
                    `${LISTING_URL}?sort=created&sortOrder=desc&_seller=true&_bids=true`,
                    (data) => {
                        sortItemsByLastBidLow(data)
                        getItems(
                            current,
                            100,
                            auctionsContainer,
                            data
                        )
                        idReader('.item-container')
                    }
                )
            }
        })

        filterHigh.addEventListener('change', function () {
            if (this.checked) {
                fetchItems(
                    `${LISTING_URL}?sort=created&sortOrder=desc&_seller=true&_bids=true`,
                    (data) => {
                        sortItemsByLastBidHigh(data)
                        getItems(
                            current,
                            100,
                            auctionsContainer,
                            data
                        )
                        idReader('.item-container')
                    }
                )
            }
        })

        filterAa.addEventListener('change', function () {
            if (this.checked) {
                fetchItems(
                    `${LISTING_URL}?sort=created&sortOrder=desc&_seller=true&_bids=true`,
                    (data) => {
                        sortItemsByTitle(data)
                        getItems(
                            current,
                            100,
                            auctionsContainer,
                            data
                        )
                        idReader('.item-container')
                    }
                )
            }
        })
        filteractive.addEventListener(
            'change',
            function () {
                if (this.checked) {
                    getFeedItems(
                        `${LISTING_URL}?sort=created&sortOrder=desc&_seller=true&_bids=true&active=true&offset=10`
                    )
                    idReader('.item-container')
                }
            }
        )

        attachedListeners = true
    }
}

async function fetchItems(apiUrl, callback) {
    try {
        const data = await dofetch(apiUrl, 'GET', true)
        callback(data)
    } catch (error) {
        console.error('Error fetching items:', error)
    }
}
