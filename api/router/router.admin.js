const { addResident } = require('../controllers/controller.admin');

const router = require('express').Router();

router.post('/resident', addResident);

module.exports = router;
