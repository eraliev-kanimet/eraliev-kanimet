import express from 'express';
import cors from 'cors';

import form from './routes/form.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use('/api/forms', form);

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
