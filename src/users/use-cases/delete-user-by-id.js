/**
 * 
 * @param {String|Number} id
 */
export const deleteUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
    await fetch(url, {
        method: 'DELETE',
    })
    return true

}