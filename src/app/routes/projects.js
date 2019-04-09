
exports.get = (req, res, next) => {

    let data = require('../data/projects_db');

    console.log(`passou aqui! - Projetos`);
    
    res.status(200).json(data.projects);
};

exports.getById = (req, res, next) => {
    
    let data = require('../data/projects_db');
    let projects = data.projects;
    let project = req.params.id;

    function isProject(project) { 
        return project.url === project;
    }

    console.log(`passou aqui! - ${project}`);

    res.status(200).json(projects.find(isProject));
};
