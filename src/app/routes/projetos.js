exports.get = (req, res, next) => {
    let data = require('../data/projects_db');
    console.log(`passou aqui! - Projetos`);
    res.status(200).json(data.projects);
};

exports.getById = (req, res, next) => {
    
    let value = req.params.id;
    let data = require('../data/projects_db');
    let projects = data.projects;
    
    function isProject(project) { 
        return project.url === value;
    }
    console.log(`passou aqui! - ${value}`);
    res.status(200).json(projects.find(isProject));
};

