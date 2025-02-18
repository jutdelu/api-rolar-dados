const randomService = require('../services/randomService');

exports.getRandomNumber = (req, res) => {
    const faces = parseInt(req.query.faces) || 6; 
    const number = randomService.generateRandomNumber(faces);
    res.json({ randomNumber: number });
};