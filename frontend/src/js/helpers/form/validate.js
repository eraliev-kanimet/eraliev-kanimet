
export default function (data, rules) {
    const errors = {};

    function addError(fieldName, message) {
        if (!errors[fieldName]) {
            errors[fieldName] = [];
        }
        errors[fieldName].push(message);
    }

    for (const [fieldName, fieldRules] of Object.entries(rules)) {
        const value = data[fieldName].value;

        fieldRules.forEach(rule => {
            const [ruleName, param] = rule.includes(':') ? rule.split(':') : [rule];

            switch (ruleName) {
                case 'required':
                    if (!value) {
                        addError(fieldName, 'Поле обязательно для заполнения.');
                    }
                    break;
                case 'string':
                    if (typeof value !== 'string') {
                        addError(fieldName, 'Значение должно быть строкой.');
                    }
                    break;
                case 'max':
                    if (value.length > parseInt(param)) {
                        addError(fieldName, `Значение не должно превышать ${param} символов.`);
                    }
                    break;
                default:
                    break;
            }
        });
    }

    return errors;
}