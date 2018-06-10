exports.get = (req, res, next) => {
    
    let dados = {
        "nome" : "Bruno A. Guazina",
        "idade" : 34,
        "bio" : "I’m Bruno Guazina a Product Designer and UX/UI Designer from Brazil currently working at Magazine Luiza. I have more than 10 years of experience, creating digital products for digital agencies, e-commerce, software house, and helping startups from around the world turn ideas into innovative digital products. I believe that access to information and technology creates a more just and inclusive world. That is why my goal is to identify people's problems and needs and to solve them by designing and implementing simple, creative, and objective solutions. In addition, I live to travel and photograph. I like to know new places, cultures, music and those responsible for all this ... people! ;)"
    };
    
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(JSON.stringify(dados))
};
