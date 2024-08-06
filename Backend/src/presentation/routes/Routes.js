import express from 'express';
import { cors } from './Middleware/Cors.js';
export const app = express();
app.use(express.json());
app.use(cors);
app.get('/registration', (request, response) => {
    response.send('Olá do backend!');
});
app.post('/registration', (request, response) => {
    const isEmpty = Object.keys(request.body).length === 0

    if (!isEmpty) {
        response.status(200).json({ message: 'Usuário cadastrado com sucesso!', data: req.body });
    } else {
        response.status(400).json({ message: 'Dados do usuário inválido.' });
    }
});
