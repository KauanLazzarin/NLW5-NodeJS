import express from 'express';
const app = express();

app.listen(3003, () => console.log('Server running on port 3003'));

app.get('/', (req, res) => {
    return res.json('olá mundo!');
});

app.post('/users', (req, res) => {
    return res.send('Usuário cadastrado com sucesso')
}); 