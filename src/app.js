const app = require('./config/express')();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const rotas = require('./app/routes/index')(app);

app.listen(3000, function () {
    console.log('Servidor rodando...');
})