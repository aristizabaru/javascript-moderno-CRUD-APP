import { localhostUserToModel } from "../mappers/localhost-user.mapper"
import { User } from "../models/user"

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
    const res = await fetch(url)
    const { data, pages } = await res.json()
    if (pages + 1 === page) return []

    const users = data.map(localhostUserToModel)

    return users
}