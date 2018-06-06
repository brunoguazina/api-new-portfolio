exports.get = (req, res, next) => {
    let dados = require('../data/projects_db');
    
    res.status(200).json(dados.projects);
};

exports.getById = (req, res, next) => {
    
    let id = req.params.projects;
    res.status(200).json(`requisição recebida - ` + id);
};

