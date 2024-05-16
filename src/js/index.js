import { checkSignedInOrNot } from './global/signedinornot.mjs'
import { tooltipList } from './global/variables.mjs'
import { getCarouselContent } from './items/getcarouselcontent.mjs'
import { getLeatestAuction } from './items/getleatestitems.mjs'

//home page functions
tooltipList
getLeatestAuction()
getCarouselContent()
checkSignedInOrNot()
