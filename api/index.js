const express = require('express');
const app = express();
const { admin } = require('./db');
const adminRouter = require('./router/router.admin');

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/admin', adminRouter);

app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});
