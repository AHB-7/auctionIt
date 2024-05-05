export const addAuthToken = (token) => {
    localStorage.setItem('Access-Token', token)
}
export const getAuthToken = () => {
    const accessToken = localStorage.getItem('Access-Token')
    return accessToken
}
