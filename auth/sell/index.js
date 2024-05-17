import { nameReader } from '../../src/js/global/idreder.mjs'
import { checkSignedInOrNot } from '../../src/js/global/signedinornot.mjs'
import { tooltipList } from '../../src/js/global/variables.mjs'
import { accessCheck } from '../../src/js/sell/accescheck.mjs'
import { sellPost } from '../../src/js/sell/sell.mjs'

tooltipList
accessCheck()
sellPost()
checkSignedInOrNot()
nameReader('.usernameReder')
