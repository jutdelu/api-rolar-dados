const express = require('express');
const cors = require('cors')

const randomRoutes = require('../src/api/routes/randomRoutes');

const app = express();

app.use(cors());
const PORT = 3000;

app.use('/random', randomRoutes);

// // Permite requisições da origem específica
// app.use(cors({origin: 'http://localhost:5174'}))

// Middleware para permitir CORS em todas as rotas
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5174');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get('/random', (req, res) => {
    res.json({ message: 'CORS funcionando!' });
  });

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});