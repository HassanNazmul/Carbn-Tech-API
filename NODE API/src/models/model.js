const dbConn = require('../../config/db.config');

const Customer = function (customer) {
    this.first_name = customer.first_name;
    this.last_name = customer.last_name;
    this.email = customer.email;
};

// CREATE NEW CUSTOMER
Customer.createNewCustomer = (customerData, result) => {
    dbConn.query(`INSERT INTO customers SET ? `, customerData, (error, response) => {
        if(error){
            console.log('Something ERROR');
            result(null, error);
        }else{
            console.log('Employee Created successfully');
            result(null, response);
        }
    })
}

// GET CUSTOMER BY ID
Customer.getCustomerByID = (id, result) => {
    dbConn.query(`SELECT * FROM customers WHERE id=?`,id, (error, response) => {
        if (error) {
            console.log('Something ERROR');
            result(null, error);
        } else {
            console.log('Customer Found by ID');
            result(null, response);
        }
    })
}

