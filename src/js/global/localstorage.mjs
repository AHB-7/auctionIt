export const addId = (id) => {
    sessionStorage.setItem('Id', id)
}
export const getId = () => {
    const itemId = sessionStorage.getItem('Id')
    return itemId
}
export const addName = (name) => {
    sessionStorage.setItem('name', name)
}
export const getName = () => {
    const itemId = sessionStorage.getItem('name')
    return itemId
}
