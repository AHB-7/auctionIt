import { getAuthToken } from '../auth/authtoken.mjs'
import { getAvatar, getMainName } from './localstorage.mjs'
import { isLocalhost, signedInOrNot } from './variables.mjs'

export function checkSignedInOrNot() {
    if (getAuthToken()) {
        const containerDiv = document.createElement('div')
        containerDiv.className = 'btn-group'

        const loginLink = document.createElement('a')
        let profileImageLink =
            '/auctionIt/auth/profile/profile.html'
        if (isLocalhost()) {
            profileImageLink = '/auth/profile/profile.html'
        }
        loginLink.href = profileImageLink

        loginLink.className = 'usernameReder'
        loginLink.id = getMainName()

        const profileImage = document.createElement('img')
        profileImage.className = 'profile profile-img'
        profileImage.src =
            getAvatar() ||
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        profileImage.alt = 'profile image'
        profileImage.style.width = '2.4rem'
        profileImage.style.height = '2.4rem'

        loginLink.appendChild(profileImage)
        containerDiv.appendChild(loginLink)

        const signOutButton =
            document.createElement('button')
        signOutButton.className = 'btn text-danger p-0'
        signOutButton.innerHTML =
            '<i class="bi bi-door-closed fs-3"></i>'

        containerDiv.appendChild(signOutButton)
        document
            .getElementById('signedInOrNot')
            .appendChild(containerDiv)

        signOutButton.addEventListener(
            'click',
            function (event) {
                event.preventDefault()
                let singInAgainLink =
                    '/auctionIt/auth/sign/registering.html'
                if (isLocalhost()) {
                    singInAgainLink =
                        '/auth/sign/registering.html'
                }
                window.location.href = singInAgainLink
                localStorage.clear()
                sessionStorage.clear()
            }
        )
    } else {
        const loginLink = document.createElement('a')
        let singInAgainLink =
            '/auctionIt/auth/sign/registering.html'
        if (isLocalhost()) {
            singInAgainLink = '/auth/sign/registering.html'
        }
        loginLink.href = singInAgainLink
        loginLink.className =
            'bi bi-box-arrow-in-right fs-4 pt-4'
        loginLink.id = 'profileMain'
        loginLink.setAttribute('data-bs-toggle', 'tooltip')
        loginLink.setAttribute('data-bs-placement', 'left')
        loginLink.setAttribute('data-bs-title', 'Login')
        signedInOrNot.appendChild(loginLink)
    }
}
