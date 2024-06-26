/**
 * Creates and displays a custom modal dialog with specified options.
 *
 * @param {string} title - The title of the modal.
 * @param {string} color - The color class for the modal title.
 * @param {string} message - The message to display in the modal body.
 * @param {string} btntxt - The text for the default button.
 * @param {Function} onDefaultButtonClick - The callback function to execute when the default button is clicked.
 * @param {Function} onCloseButtonClick - The callback function to execute when the close button is clicked.
 * @param {Array} [additionalButtons=[]] - An array of additional button objects, each with 'text', 'class', and 'onClick' properties.
 */

export function createCustomModal(
    title,
    color,
    message,
    btntxt,
    onDefaultButtonClick,
    onCloseButtonClick,
    additionalButtons = []
) {
    // Create the outermost container div with the modal class
    const modal = document.createElement('div')
    modal.className = 'modal fade show'
    modal.tabIndex = -1
    modal.style.display = 'block'
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'

    // Create the modal dialog container
    const modalDialog = document.createElement('div')
    modalDialog.className =
        'modal-dialog modal-dialog-centered'
    modal.appendChild(modalDialog)

    // Create the modal content container
    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content bg-dark'
    modalDialog.appendChild(modalContent)

    // Create the modal header
    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'
    modalContent.appendChild(modalHeader)

    // Create the title of the modal
    const modalTitle = document.createElement('h5')
    modalTitle.className = `modal-title ${color}`
    modalTitle.textContent = title
    modalHeader.appendChild(modalTitle)

    // Create the close button
    const closeButton = document.createElement('button')
    closeButton.type = 'button'
    closeButton.className = 'btn-close'
    closeButton.setAttribute('data-bs-dismiss', 'modal')
    closeButton.setAttribute('aria-label', 'Close')
    closeButton.onclick = () => {
        if (onCloseButtonClick) {
            onCloseButtonClick()
        }
        modal.remove() // Remove modal from DOM
    }
    modalHeader.appendChild(closeButton)

    // Create the modal body
    const modalBody = document.createElement('div')
    modalBody.className = 'modal-body'
    modalBody.textContent = message
    modalContent.appendChild(modalBody)

    // Create the modal footer
    const modalFooter = document.createElement('div')
    modalFooter.className = 'modal-footer'
    modalContent.appendChild(modalFooter)

    // Create the default 'Try again' button
    const tryAgainButton = document.createElement('button')
    tryAgainButton.className = 'btn btn-primary w-100'
    tryAgainButton.textContent = btntxt
    tryAgainButton.onclick = () => {
        if (onDefaultButtonClick) {
            onDefaultButtonClick()
        }
        // modal.remove() // Remove modal from DOM
    }
    modalFooter.appendChild(tryAgainButton)

    // Add additional buttons if provided
    additionalButtons.forEach((buttonInfo) => {
        const button = document.createElement('button')
        button.className = `btn ${buttonInfo.class} w-100`
        button.textContent = buttonInfo.text
        button.onclick = () => {
            if (buttonInfo.onClick) {
                buttonInfo.onClick()
            }
            // modal.remove() // Optional: Remove modal from DOM after action
        }
        modalFooter.appendChild(button)
    })

    document.body.appendChild(modal)
}
