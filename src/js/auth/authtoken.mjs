/**
 * Stores an authentication token in the browser's local storage.
 *
 * @param {string} token - The authentication token to be stored.
 */
export const addAuthToken = (token) => {
    localStorage.setItem('Access-Token', token)
}

/**
 * Retrieves the authentication token from the browser's local storage.
 *
 * @returns {string|null} The stored authentication token, or null if no token is found.
 */
export const getAuthToken = () => {
    const accessToken = localStorage.getItem('Access-Token')
    return accessToken
}
