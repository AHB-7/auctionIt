export function createSinglePost(
    id,
    profileImage,
    image,
    username,
    title,
    price,
    creationDate,
    endDate,
    description,
    allBids
) {
    // Main container section
    const section = document.createElement('section')
    section.className =
        'container mt-md-5 mt-4 pt-sm-4 mt-0'
    section.id = id

    // First row for user profile and action icon
    const row1 = document.createElement('div')
    row1.className =
        'row align-items-center justify-content-between mx-0 '
    section.appendChild(row1)

    const col1Row1 = document.createElement('a')
    col1Row1.href = `/auctionIt/auth/profile/profile.html`
    col1Row1.className = 'col-auto d-flex usernameReder'
    col1Row1.id = username
    row1.appendChild(col1Row1)

    const img1 = document.createElement('img')
    img1.className = 'profile profile-img'
    img1.alt = 'profile image'
    img1.src =
        profileImage ||
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    col1Row1.appendChild(img1)

    const textBox = document.createElement('div')
    textBox.className = 'text-box ps-2'
    col1Row1.appendChild(textBox)

    const paragraph1 = document.createElement('p')
    paragraph1.className = 'm-0 fs-5'
    paragraph1.textContent = username
    textBox.appendChild(paragraph1)

    const col2Row1 = document.createElement('div')
    col2Row1.className = 'profile profile-add-w'
    row1.appendChild(col2Row1)

    const icon = document.createElement('i')
    icon.className = 'bi bi-binoculars fs-2'
    col2Row1.appendChild(icon)

    // Second row for item details and description
    const row2 = document.createElement('div')
    row2.className =
        'row align-items-start justify-content-between mx-auto mb-5'
    section.appendChild(row2)

    const col1Row2 = document.createElement('div')
    col1Row2.className = 'col-md-5 col-12 ms-0 mt-0 p-0'
    row2.appendChild(col1Row2)

    const itemImage = document.createElement('div')
    itemImage.className = 'ratio ratio-1x1 mt-4 h-100'

    const img2 = document.createElement('img')
    img2.className = 'h-100 profile object-fit-cover '
    img2.src =
        image ||
        'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
    img2.alt = title
    itemImage.appendChild(img2)
    col1Row2.appendChild(itemImage)

    const itemDetailsRow = document.createElement('div')
    itemDetailsRow.className =
        'row justify-content-between align-items-end mt-2'
    col1Row2.appendChild(itemDetailsRow)

    const itemTitleCol = document.createElement('div')
    itemTitleCol.className = 'col-auto'
    itemDetailsRow.appendChild(itemTitleCol)

    const itemTitle = document.createElement('h1')
    itemTitle.className = 'fs-3 m-0 text-break'
    itemTitle.textContent = title
    itemTitleCol.appendChild(itemTitle)

    const itemPriceCol = document.createElement('div')
    itemPriceCol.className = 'col-auto'
    itemDetailsRow.appendChild(itemPriceCol)

    const itemPrice = document.createElement('p')
    itemPrice.className = 'fs-4 m-0'
    itemPrice.innerHTML = `${price} <strong class="text-primary">CR</strong>`
    itemPriceCol.appendChild(itemPrice)

    const creationDateRow = document.createElement('div')
    creationDateRow.className = 'row'
    col1Row2.appendChild(creationDateRow)

    const creationDatec = document.createElement('p')
    creationDatec.className = 'fs-small lh-0 m-0'
    creationDatec.innerHTML = `Created: <strong>${creationDate}</strong>`
    creationDateRow.appendChild(creationDatec)

    const endDatee = document.createElement('p')
    endDatee.className = 'fs-small m-0 lh-1'
    endDatee.innerHTML = `Ends: <strong>${endDate}</strong>`
    creationDateRow.appendChild(endDatee)

    const col2Row2 = document.createElement('div')
    col2Row2.className = 'col-md-6 col-12 mt-3 p-0 '
    row2.appendChild(col2Row2)

    const descriptionHeading = document.createElement('h2')
    descriptionHeading.className =
        'fs-6 text-wrap fw-bolder overflow-hidden text-break'
    descriptionHeading.textContent = title
    col2Row2.appendChild(descriptionHeading)
    const hr = document.createElement('hr')
    col2Row2.appendChild(hr)
    hr.className = 'mb-4 mt-0'

    const descriptionContent = document.createElement('p')
    descriptionContent.style.height = '6rem'
    descriptionContent.style.overflowY = 'auto'
    descriptionContent.textContent = description
    col2Row2.appendChild(descriptionContent)

    // const timeRemainingg = document.createElement('p')
    // timeRemainingg.className = 'fs-3'
    // timeRemainingg.innerHTML = `Time remaining: <span class="fs-3">${timeRemaining}</span>`
    // col2Row2.appendChild(timeRemainingg)

    // Link to go back

    const inputGroup = document.createElement('div')
    inputGroup.className = 'input-group my-3'
    col2Row2.appendChild(inputGroup)

    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'amount'
    input.className = 'form-control'
    input.placeholder = 'Add a bid...'
    input.setAttribute(
        'aria-label',
        'Write Your Bidding Information'
    )
    inputGroup.appendChild(input)

    const bidButton = document.createElement('button')
    bidButton.className = 'btn btn-outline-success'
    bidButton.type = 'button'
    bidButton.id = 'bidBtn'
    bidButton.textContent = 'BID'
    inputGroup.appendChild(bidButton)

    // Create the title row
    const titleRow = document.createElement('div')
    titleRow.className = 'row mt-5'
    const titleee = document.createElement('h3')
    titleee.className = 'm-0 pb-2 fs-5 fw-bold m-0'
    titleee.textContent = 'Bids history'
    titleRow.appendChild(titleee)
    col2Row2.appendChild(titleRow)

    // Create the bid rows (example shown for one bid, you can loop this part for multiple bids)

    const bids = bidCreaters(allBids)
    col2Row2.appendChild(bids)

    const backBtnContainer = document.createElement('div')
    backBtnContainer.className = 'mt-4'
    col2Row2.appendChild(backBtnContainer)

    const backButton = document.createElement('a')
    backButton.href = './feed.html'
    backButton.className = 'btn btn-secondary w-100 py-2'
    backButton.textContent = 'Back to Feed'
    backBtnContainer.appendChild(backButton)

    return section
}

// Append created content to a specific element in the DOM
function bidCreaters(allBids) {
    const container = document.createElement('div')
    container.className = 'border-bottom border-top shadow'
    container.style.maxHeight = '12rem'
    container.style.overflowY = 'auto'
    container.style.overflowX = 'hidden'

    const bids = allBids
    bids.forEach((bid) => {
        const bidRow = document.createElement('div')
        bidRow.className =
            'row justify-content-between my-2'

        // User Column
        const userCol = document.createElement('div')
        userCol.className =
            'col-auto d-flex align-items-start flex-column'

        const userNameP = document.createElement('p')
        userNameP.textContent = bid.bidderName
        userNameP.className = 'm-0 ps-2'
        userCol.appendChild(userNameP)

        const timeCreated = document.createElement('p')
        timeCreated.textContent = new Date(
            bid.created
        ).toLocaleDateString()
        timeCreated.className =
            'm-0 ps-2 fs-small text-secondary'
        userCol.appendChild(timeCreated)

        // Amount Column
        const amountCol = document.createElement('div')
        amountCol.className =
            'col-auto d-flex flex-row align-items-end gap-1 '
        const bidAmount = document.createElement('p')
        bidAmount.textContent = bid.amount.toString()
        bidAmount.className = 'm-0 fs-6'
        const currency = document.createElement('p')
        currency.textContent = 'CR'
        currency.className =
            'm-0 fs-6 text-primary fw-bold me-2'
        amountCol.appendChild(bidAmount)
        amountCol.appendChild(currency)

        bidRow.appendChild(userCol)
        bidRow.appendChild(amountCol)
        container.appendChild(bidRow)
    })

    return container
}
