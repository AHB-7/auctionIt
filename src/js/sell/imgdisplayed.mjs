import {
    auctionImage,
    defaultImageUrl,
    url,
} from '../global/variables.mjs'

/**
 * Displays an image based on the value of the URL input element.
 * Sets the image source to a default URL initially, and updates it as the URL input changes.
 */
export function imgDisplayed() {
    // Set the initial image source to the default image URL
    auctionImage.src = defaultImageUrl

    // Function to update the image source based on the URL input value
    const updateImage = () => {
        auctionImage.src = url.value || defaultImageUrl
    }

    // Update the image source initially
    updateImage()

    // Add an event listener to the URL input to update the image source when the input changes
    url.addEventListener('input', updateImage)
}
