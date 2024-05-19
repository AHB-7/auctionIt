//
// filter and sort containers
//
export const filterEl = document.querySelector('#filter')
export const sortEl = document.querySelector('#sort')
export const filterContainer = document.querySelector(
    '.filter-container'
)
export const sortContainer = document.querySelector(
    '.sort-container'
)
//
// signIn and Up containers
//
export const signUpBtn =
    document.querySelector('#signUpBtn')
export const signInBtn =
    document.querySelector('#signInBtn')
export const signUpFormContainer = document.querySelector(
    '#signUpFormContainer'
)
export const signInFormContainer = document.querySelector(
    '#signInFormContainer'
)
//
//tooltips
//
export const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
)
export const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) =>
        new bootstrap.Tooltip(tooltipTriggerEl)
)
///
///API requests
///
const BASE_URL = 'https://api.noroff.dev/api/v1'
export const REGISTER_URL = `${BASE_URL}/auction/auth/register`
export const LOGIN_URL = `${BASE_URL}/auction/auth/login`
export const PROFILES_URL = `${BASE_URL}/auction/profiles`
export const LISTING_URL = `${BASE_URL}/auction/listings`

///
///Form Signup
///

export const signUpForm =
    document.querySelector('#signUpForm')
export const signInForm =
    document.querySelector('#signInForm')

export const userName = document.getElementById('username')
export const emailSignUp =
    document.getElementById('email-2')
export const passwordSignUp =
    document.getElementById('password')
export const emailSignIn = document.getElementById('email')
export const passwordSignIn =
    document.getElementById('password-2')
///
/// Items containers
///
export const leatestItemsContainer =
    document.getElementById('leatestItemsContainer')
export const showMoreActions = document.querySelector(
    '#showMoreActions'
)
export const auctionsContainer = document.getElementById(
    'auctions-container'
)
export const carouselContainer = document.getElementById(
    'carouselContainer'
)

export const singleitemContainer = document.getElementById(
    'singleitemContainer'
)
export function lastArryItem(ar) {
    ar.length - (ar.length - 1)
}
export const filterNewest =
    document.getElementById('filterNewest')
export const filterAa = document.getElementById('filterAa')
export const filterHigh =
    document.getElementById('filterHigh')
export const filterLow =
    document.getElementById('filterLow')
export const filteractive =
    document.getElementById('active')

export const clearBtn = document.getElementById('clearBtn')
export const agreeBtn = document.getElementById('agreeBtn')
export const vehicles = document.getElementById('vehicles')
export const animals = document.getElementById('animals')
export const art = document.getElementById('art')

export const artContainer =
    document.getElementById('artContainer')
export const searchBtn =
    document.getElementById('searchBtn')

export const url = document.getElementById('URL')

export const auctionImage =
    document.getElementById('auctionImage')
export const title = document.getElementById('title')
export const auctionEndDate = document.getElementById(
    'auctionEndDate'
)
export const descriptionInput =
    document.getElementById('description')
export const tags = document.getElementById('tags')

export const defaultImageUrl =
    'https://static.vecteezy.com/system/resources/previews/004/141/669/large_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'

export const headerContainer = document.getElementById(
    'headerContainer'
)
export const signedInOrNot =
    document.getElementById('signedInOrNot')
export const changeAvatarBtn = document.getElementById(
    'changeAvatarBtn'
)
export function isLocalhost() {
    const hostname = window.location.hostname
    return (
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '' || 
        hostname.startsWith('192.168.') || 
        hostname.startsWith('10.') || 
        hostname.endsWith('.local')
    )
}
