import { tooltipList } from './global/variables.mjs'

//home page functions

function setupPageSpecificElements() {
    switch (window.location.pathname) {
        case '':
            tooltipList
            break
        case '/index.html':
            break
        case '/html/auctions.html':
            import('./ui-functions/filtering.mjs')
            break
        case '/html/registering.html':
            import('./ui-functions/regist.mjs')
            break
        default:
            console.log('No specific setup required for this page')
            break
    }
}
setupPageSpecificElements()
