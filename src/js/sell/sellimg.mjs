import {
    auctionImage,
    defaultImageUrl,
    url,
} from '../global/variables.mjs'

export function imgDisplayed() {
    auctionImage.src = defaultImageUrl
    const updateImage = () => {
        auctionImage.src = url.value || defaultImageUrl
    }

    updateImage()

    url.addEventListener('input', updateImage)
}
