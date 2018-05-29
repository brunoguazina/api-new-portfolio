const express = require('express');
const app = express();
const router = express.Router();

//Rotas//
const index = require('./routes/index');
app.use('/projetos', index);

app.listen(3000, function () {
    console.log('Servidor rodando...');
})

