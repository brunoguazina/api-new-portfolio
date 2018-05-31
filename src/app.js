const app = require('./config/express')();
const rotas = require('./app/routes/index')(app);

app.listen(3000, function () {
    console.log('Servidor rodando...');
})