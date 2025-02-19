const express = require('express');
const cors = require('cors');
const randomRoutes = require('../src/api/routes/randomRoutes');

const app = express();
const PORT = 3000;

// Configuração do CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/random', randomRoutes);

app.get('/random', (req, res) => {
    res.json({ message: 'CORS funcionando!' });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});