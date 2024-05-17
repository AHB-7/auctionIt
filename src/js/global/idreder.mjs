import { addId } from './localstorage.mjs'
import { addName } from './localstorage.mjs'

export function idReader(selector) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            if (typeof addId === 'function') {
                addId(element.id)
            }
        })
    })
}

export function nameReader(selector) {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            if (typeof addName === 'function') {
                addName(element.id)
            }
        })
    })
}
