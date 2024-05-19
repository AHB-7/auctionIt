import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import {
    LISTING_URL,
    descriptionInput,
    auctionEndDate,
    title,
    url,
    defaultImageUrl,
    isLocalhost,
} from '../global/variables.mjs'
import { getInputToArray } from './converttoarry.mjs'
import { imgDisplayed } from './imgdisplayed.mjs'

const sellForm = document.getElementById('sellForm')
export function sellPost() {
    imgDisplayed()
    sellForm.addEventListener(
        'submit',
        async function (event) {
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

                if (res && !res.error) {
                    createCustomModal(
                        'Confirmation',
                        'text-success',
                        'Your item has been successfully listed!',
                        'Browse more items',
                        () => {
                            if (isLocalhost()) {
                                window.location.href =
                                    '/auth/feed/feed.html'
                            } else {
                                window.location.href =
                                    '/auctionIt/auth/feed/feed.html'
                            }
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
                } else if (res.error) {
                    const errorMessage = res.error.errors
                        ? res.error.errors[0].message
                        : res.error.message
                    createCustomModal(
                        'Some information is missing or invalid',
                        'text-danger',
                        errorMessage,
                        'Try again',
                        () => {
                            window.location.reload()
                        }
                    )
                } else {
                    console.log('Response:', res)
                }
            } catch (error) {
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
