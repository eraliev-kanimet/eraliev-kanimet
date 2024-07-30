import {validationResult} from "express-validator";

export default function (req, res, next) {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        const errors = result.array().reduce((acc, error) => {
            const key = error?.path ?? 'unknown';

            acc[key] = acc[key] ?? [];

            acc[key].push(error.msg);

            return acc;
        }, {});

        const message = Object.values(errors)?.[0]?.[0] ?? 'Validation error';

        return res.status(422).json({message, errors});
    }

    next();
}
