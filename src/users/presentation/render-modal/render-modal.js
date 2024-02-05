import modalHTML from './render-modal.html?raw'
import './render-modal.css'

let modal, form


// TODO: cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal')
}

export const hideModal = () => {
    modal?.classList.add('hide-modal')
    form?.reset()
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {

    if (modal) return

    modal = document.createElement('div')
    modal.innerHTML = modalHTML
    modal.classList.add('modal-container', 'hide-modal')

    form = modal.querySelector('form')

    modal.addEventListener('click', (event) => {
        if (event.target.className !== 'modal-container') return

        hideModal()
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const formData = new FormData(form)
        const userLike = {}

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = Number(value)
                continue
            }

            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false
                continue
            }


            userLike[key] = value
        }


        // TODO: salvar usuario

    })

    element.append(modal)

}