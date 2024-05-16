import { headerContainer } from '../global/variables.mjs'
export function createProfileHeader(
    avatar,
    username,
    email,
    credits
) {
    // First main div
    const mainDiv = document.createElement('div')
    mainDiv.className =
        'shadow col row m-0 p-2 border border-top-0 border-start-0 border-end-0 border-bottom-1 border-primary '

    // Left column
    const leftCol = document.createElement('div')
    leftCol.className =
        'd-flex align-items-end gap-2 justify-content-center flex-row col-auto'

    const imgContainer = document.createElement('div')
    const profileImg = document.createElement('img')
    profileImg.src =
        avatar ||
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    profileImg.alt = 'profile-img Picture'
    profileImg.className = 'profile-page-img profile'

    imgContainer.appendChild(profileImg)
    leftCol.appendChild(imgContainer)

    const userInfoContainer = document.createElement('div')
    userInfoContainer.className = 'd-flex flex-column'

    const userName = document.createElement('h1')
    userName.className = 'fs-4 m-0 pt-2'
    userName.textContent = username

    const userEmail = document.createElement('p')
    userEmail.className = 'm-0 fs-small'
    userEmail.textContent = email

    userInfoContainer.appendChild(userName)
    userInfoContainer.appendChild(userEmail)
    leftCol.appendChild(userInfoContainer)

    // Right column
    const rightCol = document.createElement('div')
    rightCol.style =
        'height: 5.5rem; width: 1rem; position: relative;'
    rightCol.className =
        'profile-page-container col d-flex align-items-end justify-content-between flex-column'

    const settingsLink = document.createElement('a')
    settingsLink.href = '#'
    settingsLink.style =
        'position: absolute; bottom: 0; right: 0.7rem;'
    const settingsIcon = document.createElement('i')
    settingsIcon.className = 'bi bi-gear pt-5'
    settingsLink.appendChild(settingsIcon)

    const profileCardContainer =
        document.createElement('div')
    profileCardContainer.className =
        'profile-page-crd-container position-absolute'

    const profileCardIcon = document.createElement('i')
    profileCardIcon.className =
        'bi bi-credit-card-2-back-fill profile-page-crd'

    const profileCardText = document.createElement('p')
    profileCardText.className = 'm-0 fs-5'
    profileCardText.textContent = credits

    profileCardContainer.appendChild(profileCardIcon)
    profileCardContainer.appendChild(profileCardText)

    rightCol.appendChild(profileCardContainer)
    rightCol.appendChild(settingsLink)

    mainDiv.appendChild(leftCol)
    mainDiv.appendChild(rightCol)

    headerContainer.appendChild(mainDiv)

    //Toggle profile form
    settingsLink.addEventListener('click', function () {
        const profileForm =
            document.getElementById('profileForm')
        profileForm.classList.remove('d-none')
    })
    const closeButton =
        document.getElementById('closeButton')
    closeButton.addEventListener('click', function () {
        const profileForm =
            document.getElementById('profileForm')
        profileForm.classList.add('d-none')
    })
}
