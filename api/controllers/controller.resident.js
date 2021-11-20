const { resident } = require('../db');

const viewResidentInfo = async (req, res) => {
    try {
        const { id } = req.params;

        const resident_info = await resident.query(
            'select fname,lname,phone from resident where aadhar=$1;',
            [id]
        );

        res.send(resident_info['rows'][0]);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

module.exports = {
    viewResidentInfo,
};
