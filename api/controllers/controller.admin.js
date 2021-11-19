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

module.exports = {
    addResident,
};
