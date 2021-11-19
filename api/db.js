const Pool = require('pg').Pool;

const admin = new Pool({
    user: 'admin',
    password: 'password1',
    database: 'apna_ghar',
    host: 'localhost',
    port: 5432,
});

const resident = new Pool({
    user: 'resident',
    password: 'password2',
    database: 'apna_ghar',
    host: 'localhost',
    port: 5432,
});

const dependent = new Pool({
    user: 'dependent',
    password: 'password3',
    database: 'apna_ghar',
    host: 'localhost',
    port: 5432,
});

const security = new Pool({
    user: 'security',
    password: 'password4',
    database: 'apna_ghar',
    host: 'localhost',
    port: 5432,
});

const employee = new Pool({
    user: 'employee',
    password: 'password5',
    database: 'apna_ghar',
    host: 'localhost',
    port: 5432,
});

module.exports = {
    admin,
    resident,
    dependent,
    security,
    employee,
};
