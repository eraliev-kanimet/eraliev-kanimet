
const body = document.querySelector('body');

export const openModal = (e, modal) => {
    if (typeof e === 'object' && e.type === 'click') {
        e.preventDefault();
    }

    if (typeof modal === 'string') {
        modal = document.querySelector(modal);
    }

    modal.classList.add('flex');
    modal.classList.remove('hidden');

    body.classList.add('overflow-hidden');
}

export const openModals = (modal) => {
    const name = modal.dataset['modal']

    if (name) {
        document
            .querySelectorAll(`[data-open-modal="${name}"]`)
            .forEach(el => {
                el.addEventListener('click', e => {
                    openModal(e, modal);
                });
            })
    } else {
        console.error('Incorrect function used, check!')
    }
}

export const closeModal = (e, modal) => {
    if (typeof e === 'object' && e.type === 'click') {
        e.preventDefault();
    }

    if (typeof modal === 'string') {
        modal = document.querySelector(modal);
    }

    modal.classList.add('hidden');
    modal.classList.remove('flex');

    body.classList.remove('overflow-hidden');
}

export const closeModals = (modal) => {
    const name = modal.dataset['modal']

    if (name) {
        document
            .querySelectorAll(`[data-close-modal="${name}"]`)
            .forEach(el => {
                el.addEventListener('click', e => {
                    closeModal(e, modal);
                });
            })
    } else {
        console.error('Incorrect function used, check!')
    }
}