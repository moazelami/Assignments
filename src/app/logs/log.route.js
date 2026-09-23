const logController = require('./log.controller');
const {Router} = require('express');
const router = new Router();

router.post('/', logController.createLog);

module.exports = router;