exports.get = (req, res, next) => {
    let data = require('../data/brands_db');
    console.log(`passou aqui! - brands`);
    res.status(200).json(data.brands);
};

