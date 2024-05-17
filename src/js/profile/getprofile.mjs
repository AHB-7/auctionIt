import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { creatItemCard } from '../global/creatitemcard.mjs'
import { idReader } from '../global/idreder.mjs'
import { getName } from '../global/localstorage.mjs'
import {
    PROFILES_URL,
    changeAvatarBtn,
} from '../global/variables.mjs'
import { createProfileHeader } from './profileheader.mjs'
import { updateProfile } from './updateprofile.mjs'

export async function getProfile() {
    try {
        const r = await dofetch(
            PROFILES_URL +
                '/' +
                getName() +
                '?_listings=true',
            'GET',
            true
        )
        console.log(r)
        createProfileHeader(
            r.avatar,
            r.name,
            r.email,
            r.credits
        )
        const profileListings = document.getElementById(
            'profileListings'
        )

        function profileItems(container, auctions) {
            container.innerHTML = ''
            for (let i = 0; i < auctions.length; i++) {
                const item = auctions[i]
                const cardItem = creatItemCard(
                    item.media,
                    item.title,
                    '',
                    item.id
                )
                container.appendChild(cardItem)
            }
        }

        profileItems(profileListings, r.listings)

        changeAvatarBtn.addEventListener('click', () =>
            updateProfile()
        )
    } catch (error) {
        console.error('Error fetching profile:', error)
        createCustomModal(
            'You are not allowed to view this page',
            'text-warning',
            'Please sign first to view this page.',
            'Sign in',
            () => {
                window.location.href =
                    '../sign/registering.html'
            }
        )
    } finally {
        idReader('.item-container')
    }
}
