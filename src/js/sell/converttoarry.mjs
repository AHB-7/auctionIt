import { tags } from '../global/variables.mjs'

let inputToArray = []

tags.addEventListener('change', function () {
    inputToArray = tags.value.trim().split(/\s+/)
})

export function getInputToArray() {
    return inputToArray
}
