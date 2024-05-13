import {
    LISTING_URL,
    animals,
    art,
    auctionsContainer,
    clearBtn,
    vehicles,
} from '../global/variables.mjs'
import { createLoader } from '../global/loading.mjs'
import { dofetch } from '../auth/fetch.mjs'
import { getItems } from '../items/getitems.mjs'
import {
    current,
    getFeedItems,
} from '../items/getfeeditems.mjs'
import { attachEventListeners } from './evenets.mjs'
import { idReader } from '../global/idreder.mjs'

const checkedCategories = []

function updateCheckedCategories(categories, isChecked) {
    categories.forEach((category) => {
        const index = checkedCategories.indexOf(category)
        if (isChecked && index === -1) {
            checkedCategories.push(category)
        } else if (!isChecked && index !== -1) {
            checkedCategories.splice(index, 1)
        }
    })
}

function handleCategoryChange(event, category) {
    updateCheckedCategories(category, event.target.checked)
    // console.log(
    //     `${category} ${event.target.checked ? 'checked' : 'unchecked'}`
    // )
}

animals.addEventListener('change', function (event) {
    handleCategoryChange(event, [
        'animals',
        'birds',
        'dogs',
        'cats',
        'cat',
        'dog',
        'frog',
    ])
})

vehicles.addEventListener('change', function (event) {
    handleCategoryChange(event, [
        'vehicles',
        'cars',
        'motorcycles',
        'boats',
    ])
})

art.addEventListener('change', function (event) {
    handleCategoryChange(event, [
        'art',
        'paintings',
        'drawings',
        'sculptures',
        'photography',
        'prints',
        'mixed media',
        'other',
        'babee',
    ])
})

clearBtn.addEventListener('click', function () {
    ;['animals', 'vehicles', 'art'].forEach((id) => {
        document.getElementById(id).checked = false
        updateCheckedCategories([], false)
    })
    getFeedItems()
})

export async function filterAndDisplayItems() {
    createLoader(auctionsContainer)
    try {
        const response = await dofetch(
            LISTING_URL + '?_seller=true&_bids=true',
            'GET',
            false
        )
        const filteredItems = response.filter(
            (item) =>
                item.tags &&
                checkedCategories.some((category) =>
                    item.title.includes(category)
                )
        )
        auctionsContainer.innerHTML = ''
        getItems(
            0,
            current,
            auctionsContainer,
            filteredItems
        )
        attachEventListeners(filteredItems)
    } catch (error) {
        console.error('Error fetching items:', error)
        createCustomModal(
            'Something went wrong',
            'text-warning',
            'Please try to reload the page or try again later.',
            'Reload Now',
            () => {
                window.location.reload()
            }
        )
    } finally {
        idReader('.item-container')
    }
}
