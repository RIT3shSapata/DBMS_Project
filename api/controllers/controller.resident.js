const { resident,admin} = require('../db');

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
const viewDependentInfo = async (req, res) => {
    try {
        const { id } = req.params;

        const dependent_info = await resident.query(
            'select fname,lname,phone,gender from dependent where residentUID=$1;',
            [id]
        );
        res.send(dependent_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const dependentCount = async (req, res) => {
    try {
        const { id } = req.params;

        const dependent_info = await resident.query(
            'select count(*) from dependent where residentUID=$1;',
            [id]
        );
        res.send(dependent_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewVisitorInfo = async (req, res) => {
    try {
        const { id } = req.params;

        const visitor_info = await resident.query(
            'select fname,lname,purpose,phonenumber,time_of_entry,time_of_exit from visitor as v,resident_residesin_flat as rrf where rrf.residentUID=$1 AND rrf.FlatID=v.flatID;',
            [id]
        );

        res.send(visitor_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const availService = async (req, res) => {
    try {
        const {
            residentUID,
            serviceID,
        } = req.body;
        const now = new Date();
        await admin.query(
            'insert into resident_avails_services values($1,$2,$3);',
            [residentUID,serviceID,now]
        );

        res.send('Resident request received');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const Complaint = async (req, res) => {
    try {
        const {
            residentid,
            complain
        } = req.body;
        const complaintid = Math.floor(Math.random() * 10000000000);
        await admin.query(
            'insert into complaints values($1,$2,$3);',
            [complaintid,residentid,complain]
        );

        res.send('Resident complaint received');
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
const viewListOfServices = async (req, res) => {
    try {
        const services_info = await resident.query(
            'select * from services;'
        );

        res.send(services_info['rows']);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
};
module.exports = {
    viewResidentInfo,viewDependentInfo,viewVisitorInfo,availService,viewListOfServices,Complaint,dependentCount
};
