import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { LISTING_URL } from '../global/variables.mjs'

const auctionImage = document.getElementById('auctionImage')
const url = document.getElementById('URL')

auctionImage.src = ''
url.addEventListener('keyup', () => {
    auctionImage.src = url.value
})

// )
const sellForm = document.getElementById('sellForm')
export function sellPost() {
    sellForm.addEventListener(
        'submit',
        async function (event) {
            event.preventDefault()
            event.preventDefault()
            if (!sellForm.checkValidity()) {
                sellForm.classList.add('was-validated')
                return
            }
            const formData = new FormData(sellForm)
            const jsonData = Object.fromEntries(
                formData.entries()
            )

            try {
                const res = await dofetch(
                    LISTING_URL,
                    'POST',
                    true,
                    {
                        body: JSON.stringify(jsonData),
                    }
                )
                if (!res) {
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
