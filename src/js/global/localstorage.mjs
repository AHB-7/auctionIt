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
    const itemName = sessionStorage.getItem('name')
    return itemName
}
export const addMainName = (mainName) => {
    localStorage.setItem('mainName', mainName)
}
export const getMainName = () => {
    const itemName = localStorage.getItem('mainName')
    return itemName
}
export const addAvatar = (avatar) => {
    localStorage.setItem('avatar', avatar)
}
export const getAvatar = () => {
    const itemAvatar = localStorage.getItem('avatar')
    return itemAvatar
}
