const { viewResidentInfo,viewDependentInfo,viewVisitorInfo,availService } = require('../controllers/controller.resident');

// -Resident should be able to see visitor to your house
// -See dependent Details
// -See personal details
// -See services available
// -Avail a service (add to resident_avails_service)
const router = require('express').Router();
router.get('/:id',viewResidentInfo);
router.get('/dependent/:id',viewDependentInfo);
router.get('/visitor/:id',viewVisitorInfo);
router.post('/servicereq',availService);
module.exports = router;


