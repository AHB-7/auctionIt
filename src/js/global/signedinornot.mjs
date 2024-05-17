import { getAuthToken } from '../auth/authtoken.mjs'
import { signedInOrNot } from './variables.mjs'

export function checkSignedInOrNot(e) {
    if (getAuthToken()) {
        const loginLink = document.createElement('a')
        loginLink.href = '/auth/profile/profile.html'
        const profileImage = document.createElement('img')
        profileImage.className = 'profile profile-img'
        profileImage.src =
            e ||
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        profileImage.alt = ''
        loginLink.appendChild(profileImage)
        signedInOrNot.appendChild(loginLink)
    } else {
        const loginLink = document.createElement('a')
        loginLink.href = '/auth/sign/registering.html'
        loginLink.className =
            'bi bi-box-arrow-in-right fs-4 pt-4'
        loginLink.setAttribute('data-bs-toggle', 'tooltip')
        loginLink.setAttribute('data-bs-placement', 'left')
        loginLink.setAttribute('data-bs-title', 'Login')
        signedInOrNot.appendChild(loginLink)
    }
}
