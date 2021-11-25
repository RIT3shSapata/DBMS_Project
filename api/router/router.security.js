const {
    addVisitor,
    viewResidentInfo_Security,
    updateVisitor,
} = require('../controllers/controller.security');

const router = require('express').Router();
router.get('/:Fid', viewResidentInfo_Security);
router.post('/security_visitor_add', addVisitor);
router.post('/security_visitor_update', updateVisitor);

module.exports = router;
