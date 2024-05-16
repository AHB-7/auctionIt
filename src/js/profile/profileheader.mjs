import { headerContainer } from '../global/variables.mjs'
export function createProfileHeader(
    avatar,
    username,
    email,
    credits
) {
    const imgElement = document.createElement('img')
    imgElement.src = avatar
    imgElement.alt = 'Background Image'
    imgElement.className =
        'w-100 object-fit-cover rounded-3 mt-5 opacity-75'
    imgElement.style.height = '17rem'

    const profilePageContainer =
        document.createElement('div')
    profilePageContainer.className =
        'profile-page-container w-100 d-flex align-items-end pt-2'

    const profileInfoContainer =
        document.createElement('div')
    profileInfoContainer.className =
        'd-flex align-content-start justify-content-center flex-column ms-3 ms-md-5'

    const profileImg = document.createElement('img')
    profileImg.src =
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    profileImg.alt = 'profile-img Picture'
    profileImg.className = 'profile-page-img profile'

    const profileCardContainer =
        document.createElement('div')
    profileCardContainer.className =
        'profile-page-crd-container'

    const profileCardIcon = document.createElement('i')
    profileCardIcon.className =
        'bi bi-credit-card-2-back-fill profile-page-crd'

    const profileCardText = document.createElement('p')
    profileCardText.className = 'm-0 fs-5'
    profileCardText.textContent = credits

    profileCardContainer.appendChild(profileCardIcon)
    profileCardContainer.appendChild(profileCardText)

    profileInfoContainer.appendChild(profileImg)
    profileInfoContainer.appendChild(profileCardContainer)

    const userInfoContainer = document.createElement('div')
    userInfoContainer.className = 'd-flex flex-column ms-2'

    const userName = document.createElement('h1')
    userName.className = 'fs-4 m-0'
    userName.textContent = username

    const userEmail = document.createElement('p')
    userEmail.className = 'm-0 fs-small'
    userEmail.textContent = email

    userInfoContainer.appendChild(userName)
    userInfoContainer.appendChild(userEmail)

    const settingsLink = document.createElement('a')
    settingsLink.href = '../sign/registering.html'
    settingsLink.className =
        'ms-auto me-4 pe-0 pe-md-3 fs-5 mb-auto mt-5'

    const settingsIcon = document.createElement('i')
    settingsIcon.className = 'bi bi-gear'

    settingsLink.appendChild(settingsIcon)

    profilePageContainer.appendChild(profileInfoContainer)
    profilePageContainer.appendChild(userInfoContainer)
    profilePageContainer.appendChild(settingsLink)

    headerContainer.appendChild(imgElement)
    headerContainer.appendChild(profilePageContainer)
    return headerContainer
}
