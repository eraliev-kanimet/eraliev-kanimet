import {body} from "express-validator";

const requiredMax = (label, name, max = 50) => {
    const labelLower = label.toLowerCase();

    return body(name)
        .notEmpty().withMessage(`Поле ${labelLower} обязательно для заполнения.`).bail()
        .isLength({max}).withMessage(`Поле ${labelLower} не может быть более ${max} символов.`);
}

export default {
    requiredMax,
}