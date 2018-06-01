exports.get = (req, res, next) => {
    
    let dados = require('../data/projects_db');
    
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(dados.projects))
};

exports.getById = (req, res, next) => {
    let id = req.params.projects;
    
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(`requisição recebida - ` + id))
};

