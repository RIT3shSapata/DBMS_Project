const {
    addResident,
    addSecurity,
    addService,
    addEmployee,
    viewResidentInfo,
} = require('../controllers/controller.admin');

const router = require('express').Router();

router.post('/resident', addResident);
router.post('/security', addSecurity);
router.post('/service', addService);
router.post('/employee', addEmployee);
router.get('/residentinfo', viewResidentInfo);
module.exports = router;
