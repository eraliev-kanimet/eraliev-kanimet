import {Router} from 'express';

import formController from '../controllers/formController.js'

import validationMiddleware from '../middleware/validationMiddleware.js';

import integer from '../validators/integer.js';
import string from '../validators/string.js';

const router = Router();

router.post('', [
    integer.requiredInArray('Тип', 'type', [1, 2, 3, 4, 5]),
    string.requiredMax('Имя', 'name'),
    string.requiredMax('Категория', 'category'),
    string.requiredMax('Telegram', 'telegram'),
    string.requiredMax('Сообщение', 'message', 200),
    validationMiddleware,
], formController.store);

export default router;