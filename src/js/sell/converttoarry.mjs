import { tags } from '../global/variables.mjs'

let inputToArray = []

/**
 * Adds an event listener to the tags input element to update the inputToArray variable.
 * Splits the input value into an array of words separated by whitespace.
 *
 * @returns {Array} The array of input values.
 */
export function getInputToArray() {
    tags.addEventListener('input', function () {
        inputToArray = tags.value.trim().split(/\s+/)
    })

    return inputToArray
}
