const sequelize = require('sequelize');
const connection = new sequelize('shoppingcart', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql'
});

connection.authenticate()
  .then(() => console.log('Connected to shoppingcart database'))
  .catch(err => console.error(err));

module.exports = connection;