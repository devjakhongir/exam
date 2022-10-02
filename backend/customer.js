
const router = require('express').Router();
const customers = require('./customer_api');

let customersDirectory = customers;

router.get('/customers', function (req, res) {
    res.send(customersDirectory);
});

router.get('/customers/:id', function (req, res) {
    const { id } = req.params;

    const customer = customersDirectory.find(a => a.email === id);
    if (!customer) return res.status(404).send('Custom does not exist');

    res.send(customer);
});

router.post('/customer', function (req, res) {
    const {
        firstname,
        lastname,
        email,
        phone,
        date_of_birth,
        address,
        created_at,
        updated_at,
    } = req.body;

    const customerExist = customersDirectory.find(a => a.email === isbn);
    if (customerExist) return res.send('Customer already exist');

    const customer = {
        firstname,
        lastname,
        email,
        phone,
        date_of_birth,
        address,
        created_at,
        updated_at,
    };
    customersDirectory.push(customer);

    res.send(book);
});

router.put('/customers/:id', function (req, res) {
    const { id } = req.params;
    const {
        firstname,
        lastname,
        email,
        phone,
        date_of_birth,
        address,
        created_at,
        updated_at,
    } = req.body;

    let customer = customersDirectory.find(a => a.email === id);
    if (!customer) return res.status(404).send('Customer does not exist');

    const updateField = (val, prev) => !val ? prev : val;

    const updatedCustomer = {
        ...customer,
        firstname: updateField(firstname, customer.firstname),
        lastname: updateField(lastname, customer.customer),
        email: updateField(email, customer.email),
        phone: updateField(phone, customer.phone),
        date_of_birth: updateField(date_of_birth, customer.date_of_birth),
        address:updateField(address, customer.address),
        created_at: updateField(created_at, customer.created_at),
        updated_at: updateField(updated_at, customer.updated_at),
    };

    const customerIndex = customersDirectory.findIndex(a => a.email === customer.email);
    customersDirectory.splice(customerIndex, 1, updatedCustomer);

    res.status(200).send(updatedCustomer);
});

router.delete('/customer/:id', function (req, res) {
    const { id } = req.params;

    let customer = customersDirectory.find(a => a.email === id);
    if (!customer) return res.status(404).send('Customer does not exist');

    customersDirectory = customersDirectory.filter(a => a.email !== id);

    res.send('Success');
});

customer_api = router;