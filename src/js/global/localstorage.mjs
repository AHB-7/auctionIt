export const addId = (id) => {
    sessionStorage.setItem('Id', id)
}
export const getId = () => {
    const itemId = sessionStorage.getItem('Id')
    return itemId
}
