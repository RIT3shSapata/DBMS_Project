const { security } = require('../db');

const addVisitor = async (req, res) => {
    try {
        const { flatid, fname, lname, purpose, phone } = req.body;

        const timeofentry = new Date();
        const visitorID = Math.floor(Math.random() * 10000000000);

        await security.query(
            'insert into visitor_insert values($1,$2,$3,$4,$5,$6,$7);',
            [flatid, visitorID, fname, lname, purpose, phone, timeofentry]
        );

        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewResidentInfo_Security = async (req, res) => {
    try {
        const { Fid } = req.params;
        console.log('here');
        const resident_info = await security.query(
            'select fname,lname from resident_display where residentUID=(select residentUID from resident_residesin_flat where flatid=$1);',
            [Fid]
        );
        res.send(resident_info['rows'][0]);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

const updateVisitor = async (req, res) => {
    try {
        const { visitorid } = req.body;

        const timeofexit = new Date();

        console.log(timeofexit);

        await security.query(
            'update visitor set time_of_exit=$1 where visitorID=$2',
            [timeofexit, visitorid]
        );

        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

module.exports = {
    addVisitor,
    viewResidentInfo_Security,
    updateVisitor,
};
