module.exports = function (app) {
    
    const projetos = require('./projetos');
    const brands = require('./brands');
    const about = require('./about');
    
    app.use('/about', about.get);
    app.use('/projects', projetos.get);
    app.use('/brands', brands.get);
    app.use('/project/:id', projetos.getById);
}




