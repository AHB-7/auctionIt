/**
 * Stores the given ID in session storage.
 *
 * @param {string} id - The ID to be stored.
 */
export const addId = (id) => {
    sessionStorage.setItem('Id', id)
}

/**
 * Retrieves the stored ID from session storage.
 *
 * @returns {string|null} The stored ID, or null if no ID is found.
 */
export const getId = () => {
    const itemId = sessionStorage.getItem('Id')
    return itemId
}

/**
 * Stores the given name in session storage.
 *
 * @param {string} name - The name to be stored.
 */
export const addName = (name) => {
    sessionStorage.setItem('name', name)
}

/**
 * Retrieves the stored name from session storage.
 *
 * @returns {string|null} The stored name, or null if no name is found.
 */
export const getName = () => {
    const itemName = sessionStorage.getItem('name')
    return itemName
}

/**
 * Stores the given main name in local storage.
 *
 * @param {string} mainName - The main name to be stored.
 */
export const addMainName = (mainName) => {
    localStorage.setItem('mainName', mainName)
}

/**
 * Retrieves the stored main name from local storage.
 *
 * @returns {string|null} The stored main name, or null if no main name is found.
 */
export const getMainName = () => {
    const itemName = localStorage.getItem('mainName')
    return itemName
}

/**
 * Stores the given avatar URL in local storage.
 *
 * @param {string} avatar - The avatar URL to be stored.
 */
export const addAvatar = (avatar) => {
    localStorage.setItem('avatar', avatar)
}

/**
 * Retrieves the stored avatar URL from local storage.
 *
 * @returns {string|null} The stored avatar URL, or null if no avatar URL is found.
 */
export const getAvatar = () => {
    const itemAvatar = localStorage.getItem('avatar')
    return itemAvatar
}
