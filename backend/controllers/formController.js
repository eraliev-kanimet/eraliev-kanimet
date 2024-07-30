import Form from '../models/form.js';

const store = async (req, res) => {
    const {type, name, category, telegram, message} = req.body;

    await Form.create({
        type: type,
        status: 0,
        data: {name, category, telegram, message},
    });

    res.json({message: `Сообщение от ${name}: отправлено успешно!`});
};

export default {
    store,
}
