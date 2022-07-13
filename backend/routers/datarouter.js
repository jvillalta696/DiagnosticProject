const express = require('express');
const router = express.Router();
const datacontroller = require('../controller/DataController')
router.get('/',datacontroller.getData);
router.get('/:filename',datacontroller.loadData);
router.post('/n/:filename',datacontroller.saveData);

module.exports=router