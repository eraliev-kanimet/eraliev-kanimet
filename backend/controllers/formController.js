import Form from '../models/form.js';

const store = async (req, res) => {
    const {name, category, telegram, message} = req.body;

    await Form.create({
        type: category,
        status: 0,
        data: {name, telegram, message},
    });

    res.json({message: `Сообщение от ${name}: отправлено успешно!`});
};

export default {
    store,
}
