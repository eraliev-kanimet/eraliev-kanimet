import formService from "../../services/formService.js";

import {closeModals, openModals} from "../../helpers/modal.js";

const formModal = () => {
    const modal = document.querySelector('dialog[data-modal="form"]');

    openModals(modal);
    closeModals(modal);
}

export default function () {
    const form = document.getElementById('form');

    formModal();

    formService(form, {
        name: {
            tag: 'input',
            mode: 'live',
            rules: ['required', 'max:255'],
        },
        category: {
            tag: 'select-v2',
            options: {
                placeholder: 'Выберите категорию',
                items: {
                    'Консультация': 1,
                    'Партнерство': 2,
                    'Жалобы': 3,
                    'Предложение': 4,
                    'Сообщить об ошибке': 5,
                    'Другое': 0,
                },
            },
            mode: 'live',
            rules: ['required'],
        },
        telegram: {
            tag: 'input',
            mode: 'live',
            rules: ['required', 'max:255'],
        },
        message: {
            tag: 'textarea',
            mode: 'live',
            rules: ['max:1024'],
        },
    }, {
        modifyRequest(request) {
            request.category = parseInt(request.category)

            return request;
        }
    });
}