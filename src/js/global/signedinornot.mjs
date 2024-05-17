import { getAuthToken } from '../auth/authtoken.mjs'
import { addAvatar, getMainName } from './localstorage.mjs'
import { signedInOrNot } from './variables.mjs'

export function checkSignedInOrNot() {
    if (getAuthToken()) {
        const loginLink = document.createElement('a')
        loginLink.href =
            '/auctionIt/auth/profile/profile.html'
        loginLink.className = 'usernameReder'
        loginLink.id = getMainName()
        const profileImage = document.createElement('img')
        profileImage.className = 'profile profile-img'
        const checkAvatar =
            addAvatar('avatar') != URL
                ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                : addAvatar('avatar')
        profileImage.src = checkAvatar
        profileImage.alt = 'profile image'

        loginLink.appendChild(profileImage)
        signedInOrNot.appendChild(loginLink)
    } else {
        const loginLink = document.createElement('a')
        loginLink.href =
            '/auctionIt/auth/sign/registering.html'
        loginLink.className =
            'bi bi-box-arrow-in-right fs-4 pt-4'
        loginLink.id = 'profileMain'
        loginLink.setAttribute('data-bs-toggle', 'tooltip')
        loginLink.setAttribute('data-bs-placement', 'left')
        loginLink.setAttribute('data-bs-title', 'Login')
        signedInOrNot.appendChild(loginLink)
    }
}
