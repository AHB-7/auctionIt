export const addId = (id) => {
    localStorage.setItem('Id', id)
}
export const getId = () => {
    const itemId = localStorage.getItem('Id')
    return itemId
}
