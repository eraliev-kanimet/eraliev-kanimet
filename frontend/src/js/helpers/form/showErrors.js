
export default function (formErrors, errors) {
    for (const key in errors) {
        let html = ''

        errors[key].forEach((error) => {
            html += `<div>${error}</div>`
        })

        formErrors[key].innerHTML = html
    }
}