const express = require('express');
const app = express();
const adminRouter = require('./router/router.admin');
const residentRouter = require('./router/router.resident');
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/admin', adminRouter);
app.use('/resident',residentRouter);
app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});
