const express = require('express');
const randomRoutes = require('../src/api/routes/randomRoutes');

const app = express();
const PORT = 3000;

app.use('/random', randomRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});