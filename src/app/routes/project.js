exports.getById = (req, res, next) => {
    
    const data = require('../data/projects_db');	

    const projects = data.projects;
    const projectSelected = req.params.id;	


    function isProject(project) { 
        return project.url === projectSelected;        
    }

    console.log(`passou aqui! - ${projectSelected}`);

    res.status(200).json(projects.find(isProject));
};
