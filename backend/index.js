import express from 'express';

import form from './routes/form.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/forms', form);

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
