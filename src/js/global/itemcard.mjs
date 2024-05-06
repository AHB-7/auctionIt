export function itemCardNoAuth(img, title, bid, id) {
    const itemContainer = document.createElement('div')
    itemContainer.className =
        'item-container flex-shrink-0 m-2'

    const itemLinking = document.createElement('a')
    itemLinking.href = ''
    itemLinking.className = 'item-linking'

    const itemImg = document.createElement('img')
    itemImg.src = img
    itemImg.alt = ''
    itemImg.className = 'item-img'
    itemLinking.appendChild(itemImg)

    const itemFavBtn = document.createElement('div')
    itemFavBtn.className = 'item-fav-btn'

    const favLink = document.createElement('a')
    favLink.href = ''
    favLink.dataset.bsToggle = 'tooltip'
    favLink.dataset.bsPlacement = 'left'
    favLink.dataset.bsTitle = 'Add to your watch list'

    const favIcon = document.createElement('i')
    favIcon.className = 'bi fs-5 bi-plus-square'
    favLink.appendChild(favIcon)
    itemFavBtn.appendChild(favLink)

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
    itemPrice.textContent = 'Floor Price: ' + bid + ' '
    const itemPriceStrong = document.createElement('strong')
    itemPriceStrong.className = 'text-pbrand'
    itemPriceStrong.textContent = 'CR'
    itemPrice.appendChild(itemPriceStrong)

    itemText.appendChild(itemName)
    itemText.appendChild(itemPrice)

    const itemAction = document.createElement('div')
    const itemReadMore = document.createElement('a')
    itemReadMore.href = './html/infopage.html'
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

    return itemContainer
}
