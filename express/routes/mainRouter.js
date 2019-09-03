const express = require('express');
const router = express.Router();
const wsController = require('../controllers/wsController');

router.ws('/', wsController);

module.exports = router;
