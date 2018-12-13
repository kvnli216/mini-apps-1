const shoppingCartModel = require('./serverModel.js');

const createAccount = (req, res, next) => {
  // receive account data in the req (title, string)
  // query the database (insert into account table)
  shoppingCartModel.Account.create({ name: req.body.name, email: req.body.email, password: req.body.password })
    .then(account => {
      console.log('Account created: ', account);
      debugger;
      res.status(201);
      res.send('Account created');
    })
    .catch(err => {
      console.log('FAILED: Account creation', err);
      res.status(500);
      res.send(err);
    });
};

module.exports = {
  createAccount,
};