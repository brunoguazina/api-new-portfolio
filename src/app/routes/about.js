exports.get = (req, res, next) => {
    
    let data = require('../data/about_db');
    console.log(`passou aqui! - brands`);
    
    res.status(200).send(JSON.stringify(data.about));
};
