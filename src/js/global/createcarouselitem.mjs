import { checkPath } from './variables.mjs'

export function createCarouselItem(
    img,
    title,
    bid,
    id,
    isActive
) {
    // Create the carousel item div
    const carouselItem = document.createElement('div')
    carouselItem.className = isActive
        ? 'carousel-item active'
        : 'carousel-item'

    // Create the item container
    const itemContainer = document.createElement('div')
    itemContainer.className =
        'item-container item-lg-container'
    itemContainer.id = id

    // Create the link wrapper for the image
    const itemLink = document.createElement('a')
    itemLink.href = checkPath(
        'e',
        'index',
        '/auth/feed/singlepost.html',
        './singlepost.html'
    )
    itemLink.className = 'item-linking'

    // Create the image element
    const itemImg = document.createElement('img')
    const defaultImg =
        'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
    itemImg.src =
        Array.isArray(img) && img.length > 0
            ? img[0]
            : defaultImg
    itemImg.alt = title
    itemImg.className = 'item-img'
    itemLink.appendChild(itemImg)

    // Create the favorite button container
    const itemFavBtn = document.createElement('div')
    itemFavBtn.className = 'item-fav-btn'
    const favLink = document.createElement('a')
    favLink.href = ''
    favLink.setAttribute('data-bs-toggle', 'tooltip')
    favLink.setAttribute('data-bs-placement', 'left')
    favLink.setAttribute(
        'data-bs-title',
        'Add to your watch list'
    )
    const favIcon = document.createElement('i')
    favIcon.className = 'bi fs-5 bi-plus-square'
    favLink.appendChild(favIcon)
    itemFavBtn.appendChild(favLink)

    // Create the item info container
    const itemInfo = document.createElement('div')
    itemInfo.className = 'item-info item-lg-info'
    const itemInfoInner = document.createElement('div')
    const infoText = document.createElement('div')
    const itemName = document.createElement('p')
    itemName.className = 'm-0 lh-sm text-center mt-2'
    itemName.textContent = title
    const itemPrice = document.createElement('p')
    itemPrice.className = 'm-0 lh-sm text-center'
    itemPrice.innerHTML = `Floor Price: ${bid} <strong class="text-pbrand">CR</strong>`

    // Append item name and price to the info inner container
    infoText.appendChild(itemName)
    infoText.appendChild(itemPrice)
    itemInfoInner.appendChild(infoText)

    // Append the inner info container to the info container
    itemInfo.appendChild(itemInfoInner)
    itemContainer.appendChild(itemLink)
    itemContainer.appendChild(itemFavBtn)
    itemContainer.appendChild(itemInfo)
    carouselItem.appendChild(itemContainer)

    return carouselItem // Return the complete carousel item
}
