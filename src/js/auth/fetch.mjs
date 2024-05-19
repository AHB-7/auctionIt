import { getAuthToken } from './authtoken.mjs'

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
