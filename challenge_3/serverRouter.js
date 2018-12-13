const router = require('express').Router();
const shoppingController = require('./serverController');

// CREATE ACCOUNT
router.post('/account', shoppingController.createAccount);

// CREATE SHIPPINGINFO
// router.post('/shipping', shoppingController.create);

// CREATE BILLINGINFO
// router.post('/billing', shoppingController.create);

module.exports = router;