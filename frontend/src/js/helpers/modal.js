
const body = document.querySelector('body');

export const openModal = (modal) => {
    if (typeof modal === 'string') {
        modal = document.querySelector(modal);
    }

    modal.classList.add('flex');
    modal.classList.remove('hidden');

    body.classList.add('overflow-hidden');
}

export const closeModal = (modal) => {
    if (typeof modal === 'string') {
        modal = document.querySelector(modal);
    }

    modal.classList.add('hidden');
    modal.classList.remove('flex');

    body.classList.remove('overflow-hidden');
}