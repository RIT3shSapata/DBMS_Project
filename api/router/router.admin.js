const {
    addResident,
    addSecurity,
    addService,
    addEmployee,
    viewResidentInfo,
    viewComplaints,
    viewEmployees,
    viewSecurity,
    viewServiceRequests,
    addFlat,
    ResidentResidesinFlat,
} = require('../controllers/controller.admin');

const router = require('express').Router();

router.post('/resident', addResident);
router.post('/security', addSecurity);
router.post('/service', addService);
router.post('/employee', addEmployee);
router.post('/flat', addFlat);
router.post('/residentresidesin', ResidentResidesinFlat);
router.get('/residentinfo', viewResidentInfo);
router.get('/complaint_info', viewComplaints);
router.get('/employee_info', viewEmployees);
router.get('/security_info', viewSecurity);
router.get('/servicerequest_info', viewServiceRequests);
module.exports = router;
