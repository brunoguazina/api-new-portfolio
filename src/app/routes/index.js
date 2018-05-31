
module.exports = function (app) {
    
    const projetos = require('./projetos')
    const about = require('./about')
    
    app.get('/', projetos.get);
    app.get('/:projects', projetos.getById);

    app.get('/about', about.get);

}




