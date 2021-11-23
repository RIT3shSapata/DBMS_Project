const {
    addVisitor,
    viewResidentInfo_Security,
    updateVisitor,
} = require('../controllers/controller.security');

const router = require('express').Router();
router.get('/:Fid', viewResidentInfo_Security);
router.post('/visitor', addVisitor);
router.post('/visitor-update', updateVisitor);

module.exports = router;
