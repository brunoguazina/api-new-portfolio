exports.get = (req, res, next) => {
    res.status(200).send('Requisição GET recebida com sucesso!');
};

exports.getById = (req, res, next) => {
    let id = req.params;
    res.status(200).send(`Requisição GETID recebida com sucesso! ${id}`);
};
