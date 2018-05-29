exports.get = (req, res, next) => {

    let dados = [
        {   
            "id": 1,
            "nome": "tour-manager",
        },
        {   
            "id": 2,
            "nome": "bruninho-e-davi",
        },
        {   
            "id": 3,
            "nome": "convenia",
        }
    ];

    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(dados, null, 2))
};

exports.getById = (req, res, next) => {
    let id = req.params.id;

    var dados = {   
            "id": 1,
            "nome": id,
        }

    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(dados, null, 2))
};
