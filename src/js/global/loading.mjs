/**
 * Creates a loader element and appends it to the specified parent element.
 *
 * @param {HTMLElement} parentElement - The parent element to which the loader will be appended.
 */
export function createLoader(parentElement) {
    const loaderContrainer = document.createElement('div')
    loaderContrainer.className = 'loaderContainer'
    const loader = document.createElement('div')
    loader.className = 'loader'
    loaderContrainer.appendChild(loader)

    parentElement.appendChild(loaderContrainer)
}
