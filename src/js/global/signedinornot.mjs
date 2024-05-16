import { getAuthToken } from '../auth/authtoken.mjs'
import { signedInOrNot } from './variables.mjs'

export function checkSignedInOrNot() {
    if (getAuthToken()) {
        const loginLink = document.createElement('a')
        loginLink.href = '/auth/profile/profile.html'
        loginLink.className =
            'bi bi-person-lines-fill fs-3 text-primary'
        loginLink.setAttribute('data-bs-toggle', 'tooltip')
        loginLink.setAttribute('data-bs-placement', 'left')
        loginLink.setAttribute('data-bs-title', 'Login')
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
