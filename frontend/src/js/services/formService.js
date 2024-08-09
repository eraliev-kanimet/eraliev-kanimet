import initializeForm from "../helpers/form/initializeForm.js";

export default function (form, schema) {
    const {data, validate, reset} = initializeForm(form, schema);

    function submit() {
        if (validate()) {
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
        reset,
    }
}
