import { filterAndDisplayItems } from '../../src/js/feedsfunction/filter.mjs'
import {
    agreeBtn,
    tooltipList,
} from '../../src/js/global/variables.mjs'
import { getFeedItems } from '../../src/js/items/getfeeditems.mjs'
import { filterContainerToggler } from '../../src/js/uifunctions/filtercontainertoggler.mjs'

tooltipList
getFeedItems()
filterContainerToggler()
agreeBtn.addEventListener('click', function () {
    filterAndDisplayItems()
})
