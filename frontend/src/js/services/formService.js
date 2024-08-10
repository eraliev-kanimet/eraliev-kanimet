import initializeForm from "../helpers/form/initializeForm.js";

export default function (form, schema, hooks = {}) {
    const {data, btn, validate, reset} = initializeForm(form, schema);

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (validate()) {
            let request = {};

            for (const key in data) {
                request[key] = data[key].value
            }

            if (hooks?.modifyRequest) {
                request = hooks.modifyRequest(request)
            }

            console.log(request)
        }
    });

    form.querySelector('[data-reset]')
        ?.addEventListener('click', (e) => {
            e.preventDefault();

            reset();
        });
}
