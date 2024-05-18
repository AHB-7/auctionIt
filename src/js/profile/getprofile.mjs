import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { creatItemCard } from '../global/creatitemcard.mjs'
import { idReader } from '../global/idreder.mjs'
import { createLoader } from '../global/loading.mjs'
import { getName } from '../global/localstorage.mjs'
import {
    PROFILES_URL,
    changeAvatarBtn,
} from '../global/variables.mjs'
import { createProfileHeader } from './profileheader.mjs'
import { updateProfile } from './updateprofile.mjs'

const allUsers = getName()
let userName = null

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
        userName = r.name
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
            createCustomModal(
                'Confirmation',
                'text-success',
                'Are you sure you want to change your avatar?',
                'Go back',
                '',
                '',
                [
                    {
                        text: 'Yes I want to change it',
                        class: 'btn-success',
                        onClick: () => {
                            updateProfile()
                        },
                    },
                ]
            )
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
        return null
    } finally {
        idReader('.item-container')
    }
}

export function getUserName() {
    return userName
}
