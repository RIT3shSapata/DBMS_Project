const router = require('express').Router();
const { admin } = require('../db');

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    const user = await admin.query(
        'select * from auth where auth.username=$1',
        [username]
    );
    console.log(user.rows[0]);
    if (password === user.rows[0].password) {
        res.send(user.rows[0].type);
    } else {
        res.status(401).send('UNAUTHORIZED');
    }
});

module.exports = router;
