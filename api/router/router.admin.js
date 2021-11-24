const {
    addResident,
    addSecurity,
    addService,
    addEmployee,
    viewResidentInfo,
    viewComplaints,
    viewEmployees,
    viewSecurity,
} = require('../controllers/controller.admin');

const router = require('express').Router();

router.post('/resident', addResident);
router.post('/security', addSecurity);
router.post('/service', addService);
router.post('/employee', addEmployee);
router.get('/residentinfo', viewResidentInfo);
router.get('/complaint_info', viewComplaints);
router.get('/employee_info', viewEmployees);
router.get('/security_info', viewSecurity);
module.exports = router;
