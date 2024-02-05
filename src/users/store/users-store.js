import { localhostUserToModel } from "../mappers/localhost-user.mapper"
import { loadUsersByPage } from "../use-cases/load-users-by-page"

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const nextPage = state.currentPage + 1
    const users = await loadUsersByPage(nextPage)
    if (users.length === 0) return

    state.currentPage = nextPage
    state.users = users
}
const loadPreviousPage = async () => {
    if (state.currentPage === 1) return

    const prevPage = state.currentPage - 1
    const users = await loadUsersByPage(prevPage)
    if (users.length === 0) return

    state.currentPage = prevPage
    state.users = users
}

/**
 * @param {User} updatedUser 
 */
const onUserChanged = (updatedUser) => {

    let wasFound = false

    state.users = state.users.map(user => {
        if (user.id === updatedUser.id) {
            wasFound = true
            return updatedUser
        }

        return user
    })

    if (state.users.length < 10 && !wasFound) {
        state.users.push(updatedUser)
    }

}

const reloadPage = async () => {
    const users = await loadUsersByPage(state.currentPage)
    if (users.length === 0) {
        await loadPreviousPage()
        return
    }

    state.users = users
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    /**
     * @returns {User[]}
     */
    getUsers: () => [...state.users], // Rompe la referencia al objeto (objetos pasan por referencia)
    /**
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage // Primitivos pasan por valor, no por referencia
}