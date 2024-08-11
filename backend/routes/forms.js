import {Router} from 'express';

import formController from '../controllers/formController.js'

import validationMiddleware from '../middleware/validationMiddleware.js';

import integer from '../validators/label/integer.js';
import string from '../validators/label/string.js';

const router = Router();

router.post('', [
    string.requiredMax('Имя', 'name'),
    integer.requiredInArray('Категория', 'category', [0, 1, 2, 3, 4, 5]),
    string.requiredMax('Telegram', 'telegram'),
    string.requiredMax('Сообщение', 'message', 1024),
    validationMiddleware,
], formController.store);

export default router;