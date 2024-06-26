import { dofetch } from '../auth/fetch.mjs'
import { createCustomModal } from '../global/alertmessage.mjs'
import { creatItemCard } from '../global/creatitemcard.mjs'
import { idReader, nameReader } from '../global/idreder.mjs'
import { createLoader } from '../global/loading.mjs'
import {
    addAvatar,
    getId,
    getName,
} from '../global/localstorage.mjs'
import {
    LISTING_URL,
    PROFILES_URL,
    changeAvatarBtn,
} from '../global/variables.mjs'
import { deletConfirmation } from './eventchanger.mjs'
import { createProfileHeader } from './profileheader.mjs'
import { creatUpdateForm } from './updateauctionform.mjs'
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

        changeAvatarBtn.addEventListener(
            'click',
            (event) => {
                event.preventDefault()
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
                                addAvatar(URLavatar.value)
                            },
                        },
                    ]
                )
            }
        )
        nameReader('.usernameReder')
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
        const deleteBtn =
            document.querySelectorAll('.delete-btn')
        const editBtn =
            document.querySelectorAll('.edit-btn')

        function deletAuction() {
            deleteBtn.forEach((auction) => {
                auction.addEventListener('click', (e) => {
                    if (e) {
                        const itemId = getId()
                        deletConfirmation(itemId)
                    }
                })
            })
        }
        function editAuction() {
            editBtn.forEach((auction) => {
                auction.addEventListener(
                    'click',
                    async (e) => {
                        const itemId = getId()
                        const getR = await dofetch(
                            `${LISTING_URL}/${itemId}`,
                            'GET',
                            true
                        )

                        creatUpdateForm(
                            getR.title,
                            getR.description,
                            getR.tags,
                            getR.media,
                            async (formData) => {
                                await dofetch(
                                    `${LISTING_URL}/${itemId}`,
                                    'PUT',
                                    true,
                                    {
                                        body: JSON.stringify(
                                            formData
                                        ),
                                    }
                                )
                                window.location.reload()
                            }
                        )
                    }
                )
            })
        }

        deletAuction()
        editAuction()
    }
}

export function getUserName() {
    return userName
}
