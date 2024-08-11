import {validate} from "./validate.js";
import validateAll from "./validate.js";
import showError from "./showError.js";
import selectV2 from "../../components/select-v2.js";

export default function (form, schema) {
    const data = {};
    const rules = {};
    const formErrors = {};

    if (form.tagName !== 'FORM') {
        throw new Error(`Fatal error: This service is only used for the html tag "form"`);
    }

    const btn = form.querySelector('button[type="submit"]');

    if (!btn) {
        throw new Error(`Fatal error: Item not found (button[type="submit"])`);
    }

    for (const key in schema) {
        if (schema[key].tag === 'select-v2') {
            data[key] = form.querySelector(`[data-select="${key}"]`);
        } else {
            data[key] = form.querySelector(`[name="${key}"]`);
        }

        if (!data[key]) {
            throw new Error(`Fatal error: Element with attribute name="${key}" not found!`);
        }

        const error = form.querySelector(`[data-error="${key}"]`);

        if (error) {
            formErrors[key] = error;

            if (schema[key]?.rules && schema[key].rules.length) {
                rules[key] = schema[key].rules;

                if (schema[key].tag !== 'select-v2') {
                    if (schema[key].mode === 'live') {
                        const event = data[key].tagName === 'SELECT' ? 'change' : 'input';

                        data[key].addEventListener(event, (e) => {
                            showError(e.target, error, validate(e.target.value, schema[key].rules));
                        })
                    }
                }
            }
        } else {
            console.warn(`Warning: Element with attribute data-error="${key}" not found!`);
        }

        if (schema[key].tag === 'select-v2') {
            selectV2(data[key], error, {mode: schema[key].mode, rules: schema[key].rules, ...schema[key].options})
        }
    }

    function _validate() {
        const errors = validateAll(data, rules)

        for (const key in errors) {
            showError(data[key], formErrors[key], errors[key]);
        }

        return !Boolean(Object.values(errors).filter(item => item.length).length);
    }

    function reset() {
        for (const key in data) {
            data[key].value = ''

            data[key].classList.remove('is-valid');
            data[key].classList.remove('is-invalid');

            formErrors[key].innerHTML = ''
        }
    }

    let successTimeout = null

    function success() {
        Array.from(form.children).forEach(el => {
            if (el.classList.contains('success-text')) {
                el.classList.toggle('!block')
            } else {
                el.classList.toggle('!hidden')
            }
        })
    }

    return {
        data,
        btn,
        validate: _validate,
        reset,
        success: (callback) => {
            clearTimeout(successTimeout);

            success();

            successTimeout = setTimeout(() => {
                success();

                if (callback) {
                    callback();
                }
            }, 5000);
        },
    };
}
