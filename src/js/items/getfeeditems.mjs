import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { getItems } from './getitems.mjs'
import {
    auctionsContainer,
    searchBtn,
} from '../global/variables.mjs'
import { idReader, nameReader } from '../global/idreder.mjs'
import { attachEventListeners } from '../feedsfunction/evenets.mjs'
import { createLoader } from '../global/loading.mjs'

const searchInput = document.getElementById('datalist')

export let current = 23

export async function getFeedItems(URL) {
    createLoader(auctionsContainer)
    try {
        const response = await dofetch(URL, 'GET', false)
        auctionsContainer.innerHTML = ''
        getItems(0, current, auctionsContainer, response)

        attachEventListeners(response)
        function searchEr() {
            createLoader(auctionsContainer)
            const searchValue =
                searchInput.value.toLowerCase()
            const filteredItems = response.filter(
                (item) =>
                    item.title
                        .toLowerCase()
                        .includes(searchValue) ||
                    item.seller.name
                        .toLowerCase()
                        .includes(searchValue)
            )
            auctionsContainer.innerHTML = ''
            getItems(
                0,
                100,
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
