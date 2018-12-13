const Sequelize = require('sequelize');
const connection = require('./db');

const Account = connection.define('account', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

const ShippingInfo = connection.define('shipping', {
  address: Sequelize.STRING,
  phone: Sequelize.TEXT,
});

const BillingInfo = connection.define('billing', {
  creditCard: Sequelize.STRING,
  expDate: Sequelize.TEXT,
  CVV: Sequelize.TEXT,
});

Account.sync();
ShippingInfo.sync();
BillingInfo.sync();


module.exports = {
  Account,
  ShippingInfo,
  BillingInfo,
}