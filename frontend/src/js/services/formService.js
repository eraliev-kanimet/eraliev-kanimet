import initializeForm from "../helpers/form/initializeForm.js";
import {post} from "../helpers/api.js";

export default function (schema, options = {hooks: {}}) {
    const url = options.url
    const form = options.form
    const hooks = options?.hooks ?? {}

    const {data, btn, validate, reset, success} = initializeForm(form, schema);

    btn.addEventListener('click', async (e) => {
        e.preventDefault();

        if (validate()) {
            btn.classList.add('is-loading');

            let request = {};

            for (const key in data) {
                request[key] = data[key].value
            }

            if (hooks?.modifyRequest) {
                request = hooks.modifyRequest(request)
            }

            await post(url, request)
                .then(() => {
                    reset();

                    success(hooks?.success);
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    btn.classList.remove('is-loading');
                });
        }
    });

    form.querySelector('[data-reset]')
        ?.addEventListener('click', (e) => {
            e.preventDefault();

            reset();
        });
}
