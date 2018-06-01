module.exports = function (app) {
    
    const projetos = require('./projetos');
    const about = require('./about');
    
    app.use('/about', about.get);
    app.use('/projects', projetos.get);
    app.get('/project/:projects', projetos.getById);

}




