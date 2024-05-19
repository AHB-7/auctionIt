import { getAuthToken } from './authtoken.mjs'

/**
 * Performs a fetch request to the specified URL with the given options.
 *
 * @param {string} url - The URL to which the request is sent.
 * @param {string} [method='GET'] - The HTTP method to use for the request.
 * @param {boolean} [isAuth=false] - Whether to include the Authorization header with the request.
 * @param {object} [options={}] - Additional options to pass to the fetch function.
 * @returns {Promise<object>} The response data from the fetch request.
 */
export async function dofetch(
    url,
    method = 'GET',
    isAuth = false,
    options = {}
) {
    try {
        const headers = {
            'Content-type': 'application/json',
        }
        if (isAuth) {
            const authToken = getAuthToken()
            headers['Authorization'] = `Bearer ${authToken}`
        }
        const combinedOptions = {
            headers,
            method,
            ...options,
        }
        const response = await fetch(url, combinedOptions)
        const data = await response.json()
        if (!response.ok) {
            return {
                error: data,
                status: response.status,
                statusText: response.statusText,
            }
        }
        return data
    } catch (error) {
        console.error(error)
        return {
            error: { message: 'Network error' },
            status: 0,
            statusText: 'Network error',
        }
    }
}
