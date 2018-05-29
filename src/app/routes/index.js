module.exports = function (app) {
    
    const projetos = require('./projetos')
    
    app.get('/', projetos.get);
    app.get('/:id', projetos.getById);

}




