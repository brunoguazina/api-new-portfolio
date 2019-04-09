module.exports = function (app) {
    
    const projects = require('./projects');
    const project = require('./project');
    const brands = require('./brands');
    const about = require('./about');
    
    app.use('/about', about.get);
    app.use('/brands', brands.get);
    app.use('/projects', projects.get);
    app.use('/project/:id', project.getById);
}




