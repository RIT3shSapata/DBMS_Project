const {
    addVisitor,
    viewResidentInfo_Security,
    updateVisitor,
} = require('../controllers/controller.security');

const router = require('express').Router();
<<<<<<< HEAD
router.get('/:Fid', viewResidentInfo_Security);
router.post('/visitor', addVisitor);
router.post('/visitor-update', updateVisitor);
=======
router.get('/:Fid',viewResidentInfo_Security);
router.post('/security_visitor_add', addVisitor);
router.post('/security_visitor_update', updateVisitor);
>>>>>>> 79e421c8a706e22d27d4e056ac750f7cdd6599ec

module.exports = router;
