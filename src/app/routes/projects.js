let data = require('../data/projects_db');


exports.get = (req, res, next) => {
    
    console.log(`passou aqui! - Projetos`);
    
    res.status(200).json(data.projects);
};

exports.getById = (req, res, next) => {
    
    let projects = data.projects;
    let value = req.params.id;

    function isProject(project) { 
        return project.url === value;
    }
    console.log(`passou aqui! - ${value}`);

    res.status(200).json(projects.find(isProject));
};
