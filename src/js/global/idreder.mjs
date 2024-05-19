import { addId } from './localstorage.mjs'
import { addName } from './localstorage.mjs'

/**
 * Adds an event listener to elements that matches the given selector.
 * When an element is hovered over, its ID is added to the local storage using the addId function.
 *
 * @param {string} selector - The CSS selector to identify the elements.
 */
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

/**
 * Adds an event listener to elements that matches the given selector.
 * When an element is hovered over, its ID is added to the local storage using the addName function.
 *
 * @param {string} selector - The CSS selector to identify the elements.
 */
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
