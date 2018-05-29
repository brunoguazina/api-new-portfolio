var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/json
app.use(bodyParser.json())

//Rotas//
const index = require('./routes/index');
app.use('/projetos', index);

app.listen(3000, function () {
    console.log('Servidor rodando...');
})