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
export const signUp = document.querySelector('#signUp')
export const signIn = document.querySelector('#signIn')
export const signUpForm = document.querySelector('#signUpForm')
export const signInForm = document.querySelector('#signInForm')
//
//tooltips
//
export const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
)
export const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
)
