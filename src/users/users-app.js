import userStore from "./store/user-store"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async (element) => {
    element.innerHTML = 'Loading...'
    await userStore.loadNextPage()
}