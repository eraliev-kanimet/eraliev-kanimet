import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

import forms from './routes/forms.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use('/api/forms', forms);

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
