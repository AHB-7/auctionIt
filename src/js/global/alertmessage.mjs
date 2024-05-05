export function createCustomModal(
    title,
    color,
    message,
    btntxt,
    onDefaultButtonClick, // Callback for the default button click action
    onCloseButtonClick, // Optional callback for close button click action
    additionalButtons = []
) {
    // Create the outermost container div with the modal class
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.tabIndex = -1
    modal.style.display = 'block'
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'

    // Create the modal dialog container
    const modalDialog = document.createElement('div')
    modalDialog.className = 'modal-dialog modal-dialog-centered'
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
    modalTitle.className = 'modal-title'
    modalTitle.className = color
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
        modal.remove() // Remove modal from DOM
    }
    modalFooter.appendChild(tryAgainButton)

    // Add additional buttons if provided
    additionalButtons.forEach((buttonInfo) => {
        const button = document.createElement('button')
        button.className = `btn ${buttonInfo.class}`
        button.textContent = buttonInfo.text
        button.onclick = () => {
            if (buttonInfo.onClick) {
                buttonInfo.onClick()
            }
            modal.remove() // Optional: Remove modal from DOM after action
        }
        modalFooter.appendChild(button)
    })

    document.body.appendChild(modal)
}
