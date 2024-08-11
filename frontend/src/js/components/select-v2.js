import showError from "../helpers/form/showError.js";
import {validate} from "../helpers/form/validate.js";

export default function (element, error, options = {}) {
    const defaultOptions = {
        default: '',
        placeholder: 'Select option',
        items: {},
        ...options,
    };

    element.value = defaultOptions.default;

    const div = document.createElement('div');

    div.textContent = defaultOptions.placeholder;

    element.append(div);

    const ul = document.createElement('ul');

    ul.innerHTML = Object.entries(defaultOptions.items)
        .map(([key, value]) => `<li data-value="${value}">${key}</li>`)
        .join('');

    element.append(ul);

    const _validate = defaultOptions.mode === 'live' && error ? (value) => showError(element, error, validate(value, defaultOptions.rules)) : () => '';

    element.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const selectedOption = e.target;
            const value = selectedOption.getAttribute('data-value');

            div.textContent = selectedOption.textContent;

            element.value = value;

            ul.classList.remove('visible');

            _validate(value)
        } else {
            ul.classList.toggle('visible');
        }
    });

    document.addEventListener('click', (event) => {
        if (!element.contains(event.target)) {
            ul.classList.remove('visible');
        }
    });

    return {
        reset() {
            element.value = defaultOptions.default;

            div.textContent = defaultOptions.placeholder;
        }
    }
}
