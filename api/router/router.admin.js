const {
    addResident,
    addSecurity,
    addService,
    addEmployee,
} = require('../controllers/controller.admin');

const router = require('express').Router();

router.post('/resident', addResident);
router.post('/security', addSecurity);
router.post('/service', addService);
router.post('/employee', addEmployee);

module.exports = router;
