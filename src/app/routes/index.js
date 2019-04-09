module.exports = function (app) {
    
    const projetos = require('./projects');
    const brands = require('./brands');
    const about = require('./about');
    
    app.use('/about', about.get);
    app.use('/brands', brands.get);
    app.use('/projects', projetos.get);
    app.use('/projects/:id', projetos.getById);
}




