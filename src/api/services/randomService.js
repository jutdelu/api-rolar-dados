const randomModel = require('../models/randomModel');

exports.generateRandomNumber = (faces) => {
    return randomModel.getRandomNumber(faces);
};