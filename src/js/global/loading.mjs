export function createLoader(parentElement) {
    const loaderContrainer = document.createElement('div')
    loaderContrainer.className = 'loaderContainer'
    const loader = document.createElement('div')
    loader.className = 'loader'
    loaderContrainer.appendChild(loader)

    parentElement.appendChild(loaderContrainer)
}
