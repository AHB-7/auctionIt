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
export function checkPath(
    vriable,
    include,
    firstoption,
    secondoption
) {
    vriable = ''
    if (window.location.pathname.includes(include)) {
        vriable = firstoption
    } else {
        vriable = secondoption
    }
    return vriable
}
export const clearBtn = document.getElementById('clearBtn')
export const agreeBtn = document.getElementById('agreeBtn')
export const vehicles = document.getElementById('vehicles')
export const animals = document.getElementById('animals')
export const art = document.getElementById('art')

export const artContainer =
    document.getElementById('artContainer')
export const searchBtn =
    document.getElementById('searchBtn')
