const express = require('express');
const router = express.Router();
const datarouter = require('./datarouter')
router.use('/api/dev',datarouter)
module.exports = router;
