const router = require('express').Router();
const shoppingController = require('./serverController');

// CREATE ACCOUNT
router.post('', shoppingController.createAccount);

// disabled below due to single-paged app restriction
// CREATE SHIPPINGINFO
// router.post('/Shipping', shoppingController.createShipping);

// CREATE BILLINGINFO
// router.post('/billing', shoppingController.create);

module.exports = router;