import {closeModal, openModal} from "../../helpers/modal.js";

const formModal = (form) => {
    const modal = document.querySelector('dialog[data-modal="form"]');

    form.addEventListener('click', (e) => e.stopPropagation());

    modal.addEventListener('click', () => closeModal(modal));

    document
        .querySelectorAll('button[data-open-modal="form"]')
        .forEach(el => el.addEventListener('click', () => openModal(modal)))
}

export default function () {
    const form = document.getElementById('form');

    formModal(form);
}