const express = require('express');
const router = express.Router();
const randomController = require('../controllers/randomController');

router.get('/', randomController.getRandomNumber);

module.exports = router;