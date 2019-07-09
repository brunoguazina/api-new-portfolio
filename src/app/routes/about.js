exports.get = (req, res, next) => {
    
    let data = require('../data/about_db');
    console.log(`passou aqui! - about`);
    
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(data.about));
};
