//
// filter and sort containers
//
export const filterEl = document.querySelector('#filter')
export const sortEl = document.querySelector('#sort')
export const filterContainer = document.querySelector('.filter-container')
export const sortContainer = document.querySelector('.sort-container')
//
// signIn and Up containers
//
export const signUpBtn = document.querySelector('#signUpBtn')
export const signInBtn = document.querySelector('#signInBtn')
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
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)
///
///API requests
///
const BASE_URL = 'https://api.noroff.dev/api/v1'
export const REGISTER_URL = `${BASE_URL}/auction/auth/register`
export const LOGIN_URL = `${BASE_URL}/auction/auth/login`
export const POSTS_URL = `${BASE_URL}/auction/posts`
export const PROFILE_URL = `${BASE_URL}/auction/listings`

///
///Form Signup
///

export const signUpForm = document.querySelector('#signUpForm')
export const signInForm = document.querySelector('#signInForm')

export const userName = document.getElementById('username')
export const emailSignUp = document.getElementById('email-2')
export const passwordSignUp = document.getElementById('password')
export const emailSignIn = document.getElementById('email')
export const passwordSignIn = document.getElementById('password-2')
