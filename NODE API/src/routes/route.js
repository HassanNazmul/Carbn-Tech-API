const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller');

// CREATE NEW CUSTOMER
router.post('/', Controller.createNewCustomer);

// GET CUSTOMER BY ID
router.get('/:id', Controller.getCustomerByID);

module.exports = router;