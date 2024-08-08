
export default function (formErrors) {
    for (const key in formErrors) {
        formErrors[key].innerHTML = ''
    }
}