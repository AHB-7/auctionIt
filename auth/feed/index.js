import { filterAndDisplayItems } from '../../src/js/feedsfunction/filter.mjs'
import { checkSignedInOrNot } from '../../src/js/global/signedinornot.mjs'
import {
    LISTING_URL,
    agreeBtn,
    tooltipList,
} from '../../src/js/global/variables.mjs'
import { getFeedItems } from '../../src/js/items/getfeeditems.mjs'
import { filterContainerToggler } from '../../src/js/uifunctions/filtercontainertoggler.mjs'

tooltipList
checkSignedInOrNot()
getFeedItems(
    `${LISTING_URL}?sort=created&sortOrder=desc&_seller=true&_bids=true`
)
filterContainerToggler()
agreeBtn.addEventListener('click', function () {
    filterAndDisplayItems()
})
