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
const onUserChanged = () => {
    throw new Error('Not implemented')
}
const reloadPage = async () => {
    throw new Error('Not implemented')
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