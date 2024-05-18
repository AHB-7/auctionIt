import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { getItems } from './getitems.mjs'
import {
    LISTING_URL,
    auctionsContainer,
    searchBtn,
} from '../global/variables.mjs'
import { idReader, nameReader } from '../global/idreder.mjs'
import { attachEventListeners } from '../feedsfunction/evenets.mjs'
import { createLoader } from '../global/loading.mjs'

const searchInput = document.getElementById('datalist')

export let current = 20

export async function getFeedItems() {
    createLoader(auctionsContainer)
    try {
        const response = await dofetch(
            LISTING_URL +
                '?sort=created&sortOrder=desc&offset=100&_seller=true&_bids=true',
            'GET',
            false
        )
        auctionsContainer.innerHTML = ''
        getItems(0, current, auctionsContainer, response)

        attachEventListeners(response)
        function searchEr() {
            const searchValue =
                searchInput.value.toLowerCase()
            const filteredItems = response.filter(
                (item) =>
                    item.description
                        .toLowerCase()
                        .includes(searchValue) ||
                    item.title
                        .toLowerCase()
                        .includes(searchValue) ||
                    item.seller.name
                        .toLowerCase()
                        .includes(searchValue)
            )
            createLoader(auctionsContainer)
            auctionsContainer.innerHTML = ''
            getItems(
                0,
                current,
                auctionsContainer,
                filteredItems
            )
        }
        nameReader('.usernameReder')
        searchBtn.addEventListener('click', searchEr)
        idReader('.item-container')
    } catch {
        createCustomModal(
            'Something went wrong',
            'text-warning',
            'Please try reload the page or try again later.',
            'Reload Now',
            () => {
                window.location.reload()
            }
        )
    }
}
