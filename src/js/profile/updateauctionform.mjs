export function creatUpdateForm(
    title,
    description,
    tags,
    media,
    onYesClick
) {
    const section = document.createElement('section')
    section.className =
        'shadow bg-dark container mt-5 pt-0 pt-sm-5 position-absolute top-0 start-50 translate-middle-x'
    section.style.maxWidth = '30rem'
    section.id = 'editAuction'

    const headers = document.createElement('h1')
    headers.className = 'fs-2 text-center'
    headers.textContent = 'Edit Auction'
    section.appendChild(headers)

    const closeBtn = document.createElement('button')
    closeBtn.type = 'button'
    closeBtn.className =
        'btn-close position-absolute top-0 end-0 m-3'
    closeBtn.onclick = () => section.remove()
    section.appendChild(closeBtn)

    const form = document.createElement('form')
    form.id = 'editForm'
    form.className = 'needs-validation text-start row'
    form.noValidate = true

    const leftCol = document.createElement('div')
    leftCol.className = 'col-12'

    // Title
    const titleDiv = document.createElement('div')
    titleDiv.className = 'row mb-3 align-items-end'

    const titleCol = document.createElement('div')
    titleCol.className = 'col-12'

    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'title')
    titleLabel.className = 'form-label'
    titleLabel.innerHTML = `Title`

    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.className = 'form-control'
    titleInput.id = 'updateTitle'
    titleInput.autocomplete = 'title'
    titleInput.setAttribute('min', '6')
    titleInput.required = true
    titleInput.value = title

    const titleInvalidFeedback =
        document.createElement('div')
    titleInvalidFeedback.className =
        'invalid-feedback fs-xs'
    titleInvalidFeedback.textContent =
        'This field can not be empty.'

    titleCol.appendChild(titleLabel)
    titleCol.appendChild(titleInput)
    titleCol.appendChild(titleInvalidFeedback)
    titleDiv.appendChild(titleCol)
    leftCol.appendChild(titleDiv)

    // Description
    const descriptionRow = document.createElement('div')
    descriptionRow.className = 'row'

    const descriptionCol = document.createElement('div')
    descriptionCol.className = 'col-12 h-100'

    const descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'description')
    descriptionLabel.className = 'form-label w-100'
    descriptionLabel.innerHTML = `Description`

    const descriptionTextarea =
        document.createElement('textarea')
    descriptionTextarea.style.height = '8.05rem'
    descriptionTextarea.className = 'form-control'
    descriptionTextarea.id = 'updateDescription'
    descriptionTextarea.required = true
    descriptionTextarea.value = description

    const descriptionInvalidFeedback =
        document.createElement('div')
    descriptionInvalidFeedback.className =
        'invalid-feedback fs-small'
    descriptionInvalidFeedback.textContent =
        'This field can not be empty.'

    descriptionCol.appendChild(descriptionLabel)
    descriptionCol.appendChild(descriptionTextarea)
    descriptionCol.appendChild(descriptionInvalidFeedback)
    descriptionRow.appendChild(descriptionCol)
    leftCol.appendChild(descriptionRow)

    // Tags
    const tagsRow = document.createElement('div')
    tagsRow.className = 'row mb-3'

    const tagsCol = document.createElement('div')
    tagsCol.className = 'col-12'

    const tagsLabel = document.createElement('label')
    tagsLabel.setAttribute('for', 'tags')
    tagsLabel.className = 'form-label'
    tagsLabel.innerHTML = `Tags`

    const tagsInput = document.createElement('input')
    tagsInput.type = 'text'
    tagsInput.className = 'form-control'
    tagsInput.id = 'updateTags'
    tagsInput.autocomplete = 'tag'
    tagsInput.value = tags

    const tagsInvalidFeedback =
        document.createElement('div')
    tagsInvalidFeedback.className = 'invalid-feedback fs-xs'
    tagsInvalidFeedback.textContent =
        'This field can not be empty.'

    tagsCol.appendChild(tagsLabel)
    tagsCol.appendChild(tagsInput)
    tagsCol.appendChild(tagsInvalidFeedback)
    tagsRow.appendChild(tagsCol)
    leftCol.appendChild(tagsRow)

    const rightCol = document.createElement('div')
    rightCol.className = 'col-12'

    // URL
    const urlRow = document.createElement('div')
    urlRow.className = 'row mb-3'

    const urlCol = document.createElement('div')
    urlCol.className = 'col-12'

    const urlLabel = document.createElement('label')
    urlLabel.setAttribute('for', 'URL')
    urlLabel.className = 'form-label'
    urlLabel.innerHTML = `Image`

    const urlInput = document.createElement('input')
    urlInput.type = 'url'
    urlInput.className = 'form-control'
    urlInput.id = 'updateURL'
    let mediaValue = ''
    if (media) {
        mediaValue = media
    } else {
        mediaValue = ''
    }
    urlInput.placeholder = mediaValue

    const urlInvalidFeedback = document.createElement('div')
    urlInvalidFeedback.className =
        'invalid-feedback fs-small'
    urlInvalidFeedback.textContent =
        'This field must be a valid URL, or you can leave it blank.'

    urlCol.appendChild(urlLabel)
    urlCol.appendChild(urlInput)
    urlCol.appendChild(urlInvalidFeedback)
    urlRow.appendChild(urlCol)
    rightCol.appendChild(urlRow)

    // Submit Button
    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.className = 'btn btn-secondary col-12 mt-4'
    submitButton.textContent = 'Go back without saving'

    rightCol.appendChild(submitButton)

    // Yes Button
    const yesButton = document.createElement('button')
    yesButton.type = 'button'
    yesButton.className = 'btn btn-primary col-12 mt-2'
    yesButton.textContent = 'Yes, make changes'
    yesButton.onclick = () => {
        if (onYesClick) {
            const formData = {
                title: titleInput.value,
                description: descriptionTextarea.value,
                tags: tagsInput.value.trim().split(/\s+/),
                media: urlInput.value,
            }
            onYesClick(formData)
        }
        section.remove()
    }

    rightCol.appendChild(yesButton)

    // Append all elements to form
    form.appendChild(leftCol)
    form.appendChild(rightCol)
    section.appendChild(form)

    document.body.appendChild(section)

    return section
}
