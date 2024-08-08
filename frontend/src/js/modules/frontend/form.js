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
}