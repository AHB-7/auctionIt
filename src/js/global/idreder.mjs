import { addId } from './localstorage.mjs'

export function idReader(selector) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            if (typeof addId === 'function') {
                addId(element.id)
            }
        })
    })
}
