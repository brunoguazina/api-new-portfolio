exports.get = (req, res, next) => {
    
    let dados = {
        "nome": "Bruno Guazina",
        "idade": 34,
    };
    
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(dados))
};
