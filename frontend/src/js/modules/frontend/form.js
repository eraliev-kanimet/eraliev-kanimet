import formService from "../../services/formService.js";

import {closeModals, openModals} from "../../helpers/modal.js";

const formModal = (form) => {
    const modal = document.querySelector('dialog[data-modal="form"]');

    form.addEventListener('click', (e) => e.stopPropagation());

    openModals(modal);
    closeModals(modal);
}

export default function () {
    const form = document.getElementById('form');

    formModal(form);

    const service = formService(form, {
        name: {
            mode: 'input',
            rules: ['required', 'max:255'],
        },
        category: {
            mode: 'input',
            rules: ['required', 'max:255'],
        },
        telegram: {
            mode: 'input',
            rules: ['required', 'max:255'],
        },
        message: {
            mode: 'input',
            rules: ['required', 'max:1024'],
        },
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        service.submit();   
    });

    form.querySelector('[data-close-modal]')
        ?.addEventListener('click', (e) => {
            e.preventDefault();

            service.reset();
        });
}