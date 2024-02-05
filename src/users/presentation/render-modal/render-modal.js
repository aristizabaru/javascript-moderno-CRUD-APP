import modalHTML from './render-modal.html?raw'
import './render-modal.css'
import { User } from '../../models/user'
import { getUserById } from '../../use-cases/get-user-by-id'

let modal, form
let loadedUser = {}

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async (id) => {
    modal?.classList.remove('hide-modal')

    if (!id) return

    const user = await getUserById(id)
    setFormValues(user)
}

export const hideModal = () => {
    modal?.classList.add('hide-modal')
    form?.reset()
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName
    form.querySelector('[name="lastName"]').value = user.lastName
    form.querySelector('[name="balance"]').value = user.balance
    form.querySelector('[name="isActive"]').checked = user.isActive

    loadedUser = user
}

/**
 * 
 * @param {HTMLDivElement} element
 * @param {(userLike)=> Promise<void>} callback
 */
export const renderModal = (element, callback) => {

    if (modal) return

    modal = document.createElement('div')
    modal.innerHTML = modalHTML
    modal.classList.add('modal-container', 'hide-modal')

    form = modal.querySelector('form')

    modal.addEventListener('click', (event) => {
        if (event.target.className !== 'modal-container') return

        hideModal()
    })

    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const formData = new FormData(form)
        const userLike = { ...loadedUser }

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = Number(value)
                continue
            }

            userLike[key] = value

            if (key === 'isActive') {
                userLike[key] = true
                continue
            }
        }

        if (!userLike.hasOwnProperty('isActive')) userLike.isActive = false

        await callback(userLike)

        hideModal()
    })

    element.append(modal)

}