const express = require('express');
const router = express.Router();

router.use('/dog', require('./dogRoutes'));
//router.use('/cat', require('./catRoutes'));

module.exports = router;