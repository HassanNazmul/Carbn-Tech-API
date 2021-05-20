const Model = require('../models/model');

// CREATE NEW CUSTOMER
exports.createNewCustomer = (request, response) => {
    const customerData = new Model(request.body);
    console.log('CustomerRequestedDate', customerData);
    // Null Check
    if (request.body.constructor === Object && Object.keys(request.body).length === 0) {
        response.send(400).send({success: false, message: 'Please Check All Fields'})
    } else {
        Model.createNewCustomer(customerData, (error, customer) => {
            if (error)
                response.send(error);
            response.json({status: true, message: 'Employee Created Successfully', data: customer.insertId})
        })
    }
}

// GET CUSTOMER BY ID
exports.getCustomerByID = (request, response) => {
    Model.getCustomerByID(request.params.id, (error, customer) => {
        if (error)
            response.send(error);
        response.send(customer)
    })
}
