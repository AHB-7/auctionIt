import { tooltipList } from './global/variables.mjs'
import { leatestAuction } from './items/allitems.mjs'

//home page functions
async function homePage() {
    leatestAuction()
    await tooltipList
}
homePage()
