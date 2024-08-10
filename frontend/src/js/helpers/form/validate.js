export function validate(value, rules) {
    const errors = [];

    rules.forEach(rule => {
        const [ruleName, param] = rule.includes(':') ? rule.split(':') : [rule];

        switch (ruleName) {
            case 'required':
                if (!value) {
                    errors.push('Поле обязательно для заполнения.');
                }
                break;
            case 'number':
                if (value.length !== String(parseInt(value)).length) {
                    errors.push('Значение должно быть номером.');
                }
                break;
            case 'max':
                if (value.length > parseInt(param)) {
                    errors.push(`Значение не должно превышать ${param} символов.`);
                }
                break;
            default:
                break;
        }
    });

    return errors;
}

export default function (data, rules) {
    const errors = {};

    for (const [fieldName, fieldRules] of Object.entries(rules)) {
        errors[fieldName] = validate(data[fieldName].value, fieldRules);
    }

    return errors;
}