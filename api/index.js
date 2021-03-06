const express = require('express');
const app = express();
const adminRouter = require('./router/router.admin');
const residentRouter = require('./router/router.resident');
const securityRouter = require('./router/router.security');
const authRouter = require('./router/router.auth');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/admin', adminRouter);
app.use('/resident', residentRouter);
app.use('/security', securityRouter);
app.use('/login', authRouter);
app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});
