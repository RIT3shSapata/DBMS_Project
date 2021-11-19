const { viewResidentInfo } = require('../controllers/controller.resident');

const router = require('express').Router();
router.get('/:id',viewResidentInfo);
module.exports = router;


