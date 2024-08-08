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
        name: '',
        category: '',
        telegram: '',
        message: '',
    }, {
        name: ['required', 'string'],
        category: ['required', 'string'],
        telegram: ['required', 'string'],
        message: ['required', 'max:255'],
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        service.submit();
    });
}