import { getUserName } from '../profile/getprofile.mjs'
import { getMainName } from './localstorage.mjs'
import { isLocalhost } from './variables.mjs'
const mainName = getMainName()
/**
 * Creates an item card element with the given parameters.
 *
 * @param {string|string[]} img - The image URL(s) for the item card.
 * @param {string} title - The title of the item.
 * @param {number} bid - The bid amount for the item.
 * @param {string} id - The ID of the item.
 * @returns {HTMLElement} The created item card element.
 */
export function creatItemCard(img, title, bid, id) {
    const itemContainer = document.createElement('div')
    itemContainer.className =
        'item-container flex-shrink-0 m-2'
    itemContainer.id = id

    const itemLinking = document.createElement('a')

    if (isLocalhost()) {
        itemLinking.href = `/auth/feed/singlepost.html?id=${id}`
    } else {
        itemLinking.href = `/auctionIt/auth/feed/singlepost.html?id=${id}`
    }

    itemLinking.className = 'item-linking'

    const itemImg = document.createElement('img')
    const defaultImgNoImage2 =
        'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'

    const validImageURL =
        Array.isArray(img) &&
        img.length > 0 &&
        typeof img[0] === 'string' &&
        img[0].trim() !== ''
    itemImg.src = validImageURL
        ? img[0]
        : defaultImgNoImage2
    itemImg.alt = title
    itemImg.className = 'item-img'
    itemImg.onerror = () => {
        if (itemImg.src !== defaultImgNoImage2) {
            itemContainer.style.display = 'none'
        }
    }

    itemLinking.appendChild(itemImg)

    const itemFavBtn = document.createElement('div')
    itemFavBtn.className = 'item-fav-btn'

    const itemDeletBtn = document.createElement('i')
    itemDeletBtn.className = 'd-none'

    if (
        window.location.href.includes(
            '/auth/profile/profile.html'
        ) &&
        mainName === getUserName()
    ) {
        itemDeletBtn.className =
            'bi bi-trash text-light position-absolute top-0 ms-0 fs-5 btn p-0 btn-danger rounded-top-5 delete-btn'
        itemDeletBtn.dataset.id = id

        const favLink = document.createElement('spam')
        itemFavBtn.className =
            'item-fav-btn w-100 text-danger rounded-0 m-0 position-relative bg-opacity-25 bg-dark edit-btn'
        favLink.className =
            'btn position-absolute top-0 end-0 edit-auction text-light p-0 bg-primary rounded-top-5'
        favLink.id = id
        const favIcon = document.createElement('i')
        favIcon.className = 'bi bi-three-dots-vertical fs-5'

        favLink.appendChild(favIcon)
        itemFavBtn.appendChild(favLink)
    } else {
        const favLink = document.createElement('spam')
        favLink.href = ''

        const favIcon = document.createElement('i')
        favIcon.className = 'bi fs-5 bi-plus-square'
        favLink.appendChild(favIcon)
        itemFavBtn.appendChild(favLink)
    }

    const itemInfo = document.createElement('div')
    itemInfo.className = 'item-info'

    const itemInfoInner = document.createElement('div')
    itemInfoInner.className = 'item-info-inner'

    const itemText = document.createElement('div')
    const itemName = document.createElement('p')
    itemName.className = 'm-0 lh-sm text-truncate'
    itemName.style.width = '8rem'
    itemName.textContent = title

    const itemPrice = document.createElement('p')
    itemPrice.className = 'm-0 lh-sm'
    itemPrice.textContent = 'Floor Price: ' + bid
    const itemPriceStrong = document.createElement('strong')
    itemPriceStrong.className = 'text-pbrand'
    itemPriceStrong.textContent = 'CR'
    itemPrice.appendChild(itemPriceStrong)

    itemText.appendChild(itemName)
    itemText.appendChild(itemPrice)

    const itemAction = document.createElement('div')
    const itemReadMore = document.createElement('a')

    if (isLocalhost()) {
        itemReadMore.href = `/auth/feed/singlepost.html?id=${id}`
    } else {
        itemReadMore.href = `/auctionIt/auth/feed/singlepost.html?id=${id}`
    }
    itemReadMore.className =
        'bg-pbrand fs-small py-1 px-3 rounded-1 shadow-dark mx-auto d-none d-md-block'
    itemReadMore.style.width = 'fit-content'
    itemReadMore.textContent = 'Read More'
    itemAction.appendChild(itemReadMore)

    itemInfoInner.appendChild(itemText)
    itemInfoInner.appendChild(itemAction)
    itemInfo.appendChild(itemInfoInner)

    itemContainer.appendChild(itemLinking)
    itemContainer.appendChild(itemFavBtn)
    itemContainer.appendChild(itemInfo)
    itemContainer.appendChild(itemDeletBtn)

    return itemContainer
}
