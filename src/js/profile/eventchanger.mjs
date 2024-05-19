import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { LISTING_URL } from '../global/variables.mjs'

export function deletConfirmation(e) {
    createCustomModal(
        'Confirmation',
        'text-success',
        'Are you sure you want to delete this auction?',
        'No I want',
        '',
        '',
        [
            {
                text: 'Yes Please Delete',
                class: 'btn-danger',
                onClick: () => {
                    dofetch(
                        `${LISTING_URL}/${e}`,
                        'DELETE',
                        true
                    ).then(() => {
                        window.location.reload()
                    })
                },
            },
        ]
    )
}

export function editConfirmation(e) {
    createCustomModal(
        'Confirmation',
        'text-success',
        'Are you sure you want to change your avatar?',
        'No I want',
        '',
        '',
        [
            {
                text: 'Yes Please Delete',
                class: 'btn-danger',
                onClick: () => {},
            },
        ]
    )
}
