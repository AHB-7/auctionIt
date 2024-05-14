const defaultImageUrl =
    'https://static.vecteezy.com/system/resources/previews/004/141/669/large_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
import { auctionImage, url } from '../global/variables.mjs'

auctionImage.src = defaultImageUrl

export const urlPicker = url.addEventListener(
    'keyup',
    () => {
        auctionImage.src = url.value || defaultImageUrl
    }
)
