import { tooltipList } from './global/variables.mjs'

//home page functions

function setupPageSpecificElements() {
    switch (window.location.pathname) {
        case '':
            tooltipList
            break
        case '/index.html':
            break
        case '/auth/feed/feed.html':
            import('./ui-functions/filtering.mjs')
            break
        case '/auth/sign/registering.html':
            import('./ui-functions/regist.mjs')
            break
        default:
            console.log('No specific setup required for this page')
            break
    }
}
setupPageSpecificElements()
