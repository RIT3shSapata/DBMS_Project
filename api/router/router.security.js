const { addVisitor, viewResidentInfo_Security, updateVisitor } = require('../controllers/controller.security');

const router = require('express').Router();
router.get('/:Fid',viewResidentInfo_Security);
router.post('/security', addVisitor);
router.post('/security', updateVisitor);

module.exports = router;
