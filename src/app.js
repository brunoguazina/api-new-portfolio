const app = require('express')();
const rotas = require('./app/routes/index')(app);

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:" + port);