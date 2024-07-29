import {body} from "express-validator";

const requiredInArray = (label, name, arr) => {
    const labelLower = label.toLowerCase();

    return body(name)
        .notEmpty().withMessage(`Поле ${labelLower} обязательно для заполнения.`).bail()
        .isNumeric().withMessage(`Поле ${labelLower} должно быть числом.`).bail()
        .isIn(arr).withMessage(`Поле ${labelLower} должна быть одним из ${arr.join(', ')}.`);
}

export default {
    requiredInArray,
}