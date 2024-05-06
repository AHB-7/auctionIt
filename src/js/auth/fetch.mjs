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
        if (isAuth === true) {
            const authToke = getAuthToken()
            headers['Authorization'] = `Bearer ${authToke}`
        }
        const combinedOptions = {
            headers,
            method,
            ...options,
        }
        const response = await fetch(url, combinedOptions)
        if (!response.ok) {
            const errorDetails = await response.text()
            throw new Error(
                `HTTP error ${response.status}: ${errorDetails}`
            )
        }
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
    }
}
