import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { creatItemCard } from '../global/creatitemcard.mjs'
import { idReader } from '../global/idreder.mjs'
import { createLoader } from '../global/loading.mjs'
import {
    // getMainName,
    getName,
} from '../global/localstorage.mjs'
import {
    PROFILES_URL,
    changeAvatarBtn,
} from '../global/variables.mjs'
import { createProfileHeader } from './profileheader.mjs'
import { updateProfile } from './updateprofile.mjs'

const allUsers = getName()
// const logInUser = getMainName()
// const profileMain = document.getElementById('profileMain')

export async function getProfile() {
    let nameOfUser = allUsers
    createLoader(document.getElementById('profileListings'))
    try {
        const r = await dofetch(
            `${PROFILES_URL}/${nameOfUser}?_listings=true`,
            'GET',
            true
        )
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
