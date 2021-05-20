const express = require('express');
const bodyParser = require('body-parser');

// CREATE EXPRESS APP
const app = express();

// SETUP THE SERVER PORT
const PORT = process.env.PORT || 4000;

// PARSE REQUESTED DATA CONTENT TYPE APPLICATION / X-WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({extended: false}));

// PARSE REQUEST DATA CONTENT TYPE APPLICATION/JSON
app.use(bodyParser.json());

// DEFINE ROOT ROUTE
app.get('/', (request, response) => {
    response.send(`NODE & EXPRESS Server running on PORT ${PORT}`);
});

// LISTEN TO THE PORT
app.listen(PORT,() => {
    console.log(`Your server is running on PORT ${PORT}`);
});

// IMPORT CUSTOMER ROUTES
const CustomerRoutes = require('./src/routes/route');

// CREATE CUSTOMER ROUTES
app.use('/customer', CustomerRoutes)