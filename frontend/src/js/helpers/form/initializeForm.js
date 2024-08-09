import {validate} from "./validate.js";
import validateAll from "./validate.js";
import showError from "./showError.js";

export default function (form, schema) {
    const data = {};
    const rules = {};
    const formErrors = {};

    for (const key in schema) {
        data[key] = form.querySelector(`[name="${key}"]`);

        if (!data[key]) {
            throw new Error(`Fatal error: Element with attribute name="${key}" not found!`);
        }

        const error = form.querySelector(`[data-error="${key}"]`);

        if (error) {
            formErrors[key] = error;

            if (schema[key]?.rules && schema[key].rules.length) {
                rules[key] = schema[key].rules;

                if (schema[key].mode === 'input') {
                    data[key].addEventListener('input', (e) => {
                        showError(e.target, error, validate(e.target.value, schema[key].rules));
                    })
                }
            }
        } else {
            console.warn(`Warning: Element with attribute data-error="${key}" not found!`);
        }
    }

    function _validate() {
        const errors = validateAll(data, rules)

        for (const key in errors) {
            showError(data[key], formErrors[key], errors[key]);
        }

        return Object.values(errors).filter(item => !item.length).length;
    }

    return {
        data,
        validate: _validate,
    };
}
