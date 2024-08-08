import validate from "../helpers/form/validate.js";
import showErrors from "../helpers/form/showErrors.js";
import resetErrors from "../helpers/form/resetErrors.js";

export default function (form, schema, rules = {}) {
    const data = {}
    const formErrors = {}

    for (const key in schema) {
        data[key] = form.querySelector(`[name="${key}"]`);

        if (!data[key]) {
            throw new Error(`Fatal error: Element with attribute name="${key}" not found!`)
        }

        const error = form.querySelector(`[data-error="${key}"]`);

        if (error) {
            formErrors[key] = error;
        } else {
            console.warn(`Warning: Element with attribute data-error="${key}" not found!`)
        }
    }

    function submit() {
        resetErrors(formErrors)

        const errors = validate(data, rules)

        if (Object.keys(errors).length) {
            showErrors(formErrors, errors)
        } else {
            const request = {}

            for (const key in data) {
                request[key] = data[key].value
            }

            console.log(request)
        }
    }

    return {
        data,
        submit,
    }
}
