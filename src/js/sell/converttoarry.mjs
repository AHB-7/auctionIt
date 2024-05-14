import { tags } from '../global/variables.mjs'

let inputToArray = []

tags.addEventListener('change', function () {
    inputToArray = tags.value.trim().split(/\s+/)

    const resultAryy = JSON.stringify(inputToArray)
    console.log(resultAryy)
})

export function getInputToArray() {
    return inputToArray
}

// export function convertInputToArray() {
//     if (tags) {
//         const MakeToArray = tags.value

//         if (typeof MakeToArray === 'string') {
//             const inputToArray = tags.trim().split(/\s+/)

//             const resultAryy = JSON.stringify(inputToArray)
//             console.log(resultAryy)
//         }
//     } else {
//         console.error('Input value is not a string')
//     }
// }
