import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import {
    LISTING_URL,
    descriptionInput,
    auctionEndDate,
    title,
    url,
    defaultImageUrl,
} from '../global/variables.mjs'
import { getInputToArray } from './convertToArry.mjs'
import { imgDisplayed } from './sellimg.mjs'

const sellForm = document.getElementById('sellForm')
export function sellPost() {
    imgDisplayed()
    sellForm.addEventListener(
        'submit',
        async function (event) {
            event.preventDefault()
            event.preventDefault()
            if (!sellForm.checkValidity()) {
                sellForm.classList.add('was-validated')
                return
            }

            try {
                const mediaUrl =
                    url.value || defaultImageUrl
                const res = await dofetch(
                    LISTING_URL,
                    'POST',
                    true,
                    {
                        body: JSON.stringify({
                            title: title.value,
                            description:
                                descriptionInput.value,
                            endsAt: auctionEndDate.value,
                            tags: getInputToArray(),
                            media: [mediaUrl],
                        }),
                    }
                )
                if (res) {
                    createCustomModal(
                        'Confirmation',
                        'text-success',
                        'Your item has been successfully listed!',
                        'Browse more items',
                        () => {
                            window.location.href =
                                '/auth/feed/feed.html'
                        },
                        '',
                        [
                            {
                                text: 'Add a new item',
                                class: 'btn-primary',
                                onClick: () => {
                                    window.location.reload()
                                },
                            },
                        ]
                    )
                } else if (!res) {
                    createCustomModal(
                        'Some information is missing or invalid',
                        'text-danger',
                        'Please make sure you have entered correct information',
                        'Try again',
                        () => {
                            window.location.reload()
                        }
                    )
                } else {
                    console.log('Response:', res)
                }
            } catch {
                createCustomModal(
                    'Something went wrong with the sign-in process',
                    'text-danger',
                    'Please try again later or try to use a different browser',
                    'Try again',
                    () => {
                        window.location.reload()
                    }
                )
            }
        }
    )
}
