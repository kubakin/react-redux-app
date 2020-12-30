const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}
const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
}
const itemLoaded = (newItem) => {
    return {
        type: 'ITEM_LOAD',
        payload: newItem
    }
}
const addToCart = (id) => {
    return {
        type: 'KORZINA',
        payload: id
    }
}
const onDelete = (id)=> {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}
export {
    menuLoaded,
    menuRequested,
    menuError,
    itemLoaded,
    addToCart,
    onDelete
}