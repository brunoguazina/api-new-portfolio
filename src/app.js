const app = require('./config/express')();

const rotas = require('./app/routes/index')(app);

app.listen(3001, function () {
    console.log('Servidor rodando...');
})