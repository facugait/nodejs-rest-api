const express = require('express');
const router = express.Router();

router.use('/dog', require('./dogRoutes'));

module.exports = router;