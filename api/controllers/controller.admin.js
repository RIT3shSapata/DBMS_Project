const { admin } = require('../db');

const addResident = async (req, res) => {
    try {
        const {
            aadhar,
            fname,
            lname,
            dob,
            phone,
            gender,
            pet_info = 'no pet',
        } = req.body;

        const sql_dob = new Date(dob)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');

        await admin.query(
            'insert into resident values($1,$2,$3,$4,$5,$6,$7);',
            [aadhar, fname, lname, sql_dob, phone, gender, pet_info]
        );

        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

const addSecurity = async (req, res) => {
    try {
        const { fname, lname, phone, doj, shift = 'day' } = req.body;

        const sql_doj = new Date(doj)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');

        const key = Math.floor(Math.random() * 10000000000);

        await admin.query('insert into security values($1,$2,$3,$4,$5,$6);', [
            key,
            fname,
            lname,
            phone,
            sql_doj,
            shift,
        ]);

        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

module.exports = {
    addResident,
    addSecurity,
};
