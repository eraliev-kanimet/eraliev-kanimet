export default function (input, element, errors) {
    let html = ''

    errors.forEach((error) => {
        html += `<div>${error}</div>`
    })

    if (html) {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
    } else {
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
    }

    element.innerHTML = html
}
