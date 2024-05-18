import { idReader } from '../global/idreder.mjs'

const editAuctionBtn =
    document.querySelectorAll('.edit-auction')

export function editAuction() {
    editAuctionBtn.forEach((auction) => {
        auction.addEventListener('mouseenter', () => {
            idReader('.edit-auction')
        })
    })
}
