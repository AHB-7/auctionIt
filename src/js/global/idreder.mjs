import { addId } from './localstorage.mjs'

export function idReader() {
    const itemCards = document.querySelectorAll(
        '.item-container'
    )
    itemCards.forEach((item) => {
        item.addEventListener('click', () => {
            console.log(item.id)
            addId(item.id)
        })
    })
}
