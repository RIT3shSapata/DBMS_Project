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

        await admin.query('insert into auth values($1,$2,$3);', [
            aadhar,
            'password2',
            'resident',
        ]);

        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

const addSecurity = async (req, res) => {
    try {
        const { fname, lname, phone, doj, shift = 'day', flatid } = req.body;

        const sql_doj = new Date(doj)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');

        const securityID = Math.floor(Math.random() * 10000000000);

        await admin.query('insert into security values($1,$2,$3,$4,$5,$6);', [
            securityID,
            fname,
            lname,
            phone,
            sql_doj,
            shift,
        ]);

        await admin.query('insert into auth values($1,$2,$3);', [
            securityID,
            'password3',
            'security',
        ]);
        await admin.query('insert into flat_has_security values($1,$2);', [
            flatid,
            securityID,
        ]);
        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const addFlat = async (req, res) => {
    try {
        const { flatid, nobhk } = req.body;
        await admin.query('insert into flat values($1, $2);', [flatid, nobhk]);
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const addService = async (req, res) => {
    try {
        const { cost, type } = req.body;

        const serviceID = Math.floor(Math.random() * 10000000000);

        await admin.query('insert into services values($1,$2,$3);', [
            serviceID,
            cost,
            type,
        ]);

        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

const addEmployee = async (req, res) => {
    try {
        const {
            fname,
            lname,
            phone,
            doj,
            gender,
            shift = 'day',
            serviceID,
            salary,
        } = req.body;

        const sql_doj = new Date(doj)
            .toISOString()
            .slice(0, 19)
            .replace('T', ' ');

        const employeeID = Math.floor(Math.random() * 10000000000);

        await admin.query(
            'insert into employee values($1,$2,$3,$4,$5,$6,$7,$8,$9);',
            [
                employeeID,
                fname,
                lname,
                phone,
                sql_doj,
                gender,
                shift,
                serviceID,
                salary,
            ]
        );

        res.send('Recieved the body');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewResidentInfo = async (req, res) => {
    try {
        const residents_info = await admin.query(
            'select r.residentuid,count,r.flatid,rent_owned from (SELECT residentuid,count(visitorid) as count FROM visitor RIGHT JOIN resident_residesin_flat USING (flatid) group by(residentuid)) as f JOIN resident_residesin_flat as r ON r.residentuid=f.residentuid;'
        );
        res.send(residents_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewComplaints = async (req, res) => {
    try {
        const complaint_info = await admin.query(
            'select complaintID,residentUID,complain from complaints;'
        );

        res.send(complaint_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewEmployees = async (req, res) => {
    try {
        const employee_info = await admin.query(
            'select employeeID,Fname,Lname,phone,doj,shift,serviceID,salary from employee;'
        );

        res.send(employee_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewSecurity = async (req, res) => {
    try {
        const security_info = await admin.query(
            'select securityID,Fname,Lname,phone,doj,shift from security;'
        );

        res.send(security_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewServiceRequests = async (req, res) => {
    try {
        const servicerequest_info = await admin.query(
            'select r.Aadhar,r.Fname,r.Lname,ras.serviceID,s.type,ras.serviceTime,f.flatid from resident as r, resident_avails_services as ras, services as s,resident_residesin_flat as f where r.Aadhar=ras.ResidentUID and s.serviceID=ras.serviceID and r.aadhar=f.residentuid'
        );

        res.send(servicerequest_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const ResidentResidesinFlat = async (req, res) => {
    try {
        const { residentid, flatid, rent_owned } = req.body;
        await admin.query(
            'insert into resident_residesin_flat values($1, $2,$3);',
            [residentid, flatid, rent_owned]
        );
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};

module.exports = {
    addResident,
    addSecurity,
    addService,
    addEmployee,
    viewResidentInfo,
    viewComplaints,
    viewEmployees,
    viewSecurity,
    viewServiceRequests,
    addFlat,
    ResidentResidesinFlat,
};
