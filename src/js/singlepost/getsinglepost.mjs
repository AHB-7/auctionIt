import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { createSinglePost } from '../global/creatsinglepost.mjs'
import { nameReader } from '../global/idreder.mjs'
import { getId } from '../global/localstorage.mjs'

import {
    LISTING_URL,
    singleitemContainer,
} from '../global/variables.mjs'

export async function getSingleItem() {
    try {
        const response = await dofetch(
            `${LISTING_URL}/${getId()}?_seller=true&_bids=true`,
            'GET',
            false
        )

        const bids =
            response.bids.length > 0
                ? response.bids[response.bids.length - 1]
                      .amount
                : 'No bids'
        const created = new Date(
            response.created
        ).toLocaleDateString()
        const endAt = new Date(
            response.endsAt
        ).toLocaleDateString()

        singleitemContainer.appendChild(
            createSinglePost(
                response.id,
                response.seller.avatar,
                response.media[0],
                response.seller.name,
                response.title,
                bids,
                created,
                endAt,
                response.description,
                response.bids
            )
        )
        nameReader('.usernameReder')
    } catch (err) {
        console.error('Error fetching item details:', err)
        createCustomModal(
            'Something went wrong',
            'text-warning',
            'Please try reload the page or try again later.',
            'Reload Now',
            () => {
                window.location.reload()
            }
        )
    } finally {
        const bidBtn = document.getElementById('bidBtn')

        bidBtn.addEventListener('click', async (event) => {
            const amount = document.getElementById('amount')
            try {
                const res = await dofetch(
                    LISTING_URL +
                        '/' +
                        sessionStorage.getItem('Id') +
                        '/bids',
                    'post',
                    true,
                    {
                        body: JSON.stringify({
                            amount: parseFloat(
                                amount.value
                            ),
                        }),
                    }
                )

                if (res.error) {
                    const errorMessage = res.error.errors
                        ? res.error.errors[0].message
                        : res.error.message
                    createCustomModal(
                        'Something went wrong',
                        'text-danger',
                        errorMessage,
                        'Try again',
                        () => {}
                    )
                } else {
                    window.location.reload()
                }
            } catch {
                createCustomModal(
                    'Something went wrong',
                    'text-danger',
                    'The auction is either closed or the bid is too low. Please check the end date and try again.',
                    'Try again',
                    () => {}
                )
            }
        })
    }
}
