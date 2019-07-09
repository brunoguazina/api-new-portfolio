exports.get = (req, res, next) => {

    let data = require('../data/projects_db');
    console.log(`passou aqui! - Projetos`);
    
    res.status(200).json(data.projects);
};
