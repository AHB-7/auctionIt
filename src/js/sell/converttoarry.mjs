import { tags } from '../global/variables.mjs'

let inputToArray = []

export function getInputToArray() {
    tags.addEventListener('input', function () {
        inputToArray = tags.value.trim().split(/\s+/)
    })

    return inputToArray
}
