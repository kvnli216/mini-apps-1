const shoppingCartModel = require('./serverModel.js');
let userData = {};
const createAccount = (req, res, next) => {
  if (req.body.name !== undefined) { // check if form1 filled
    shoppingCartModel.Account.create({ 
      name: req.body.name, 
      email: req.body.email, 
      password: req.body.password,
    })
    .then(account => {
      res.status(201);
      shoppingCartModel.Account.findAll()
        .then(account => {
          userData.account = account[account.length-1].dataValues;
          res.status(200);
          res.send( 
            `
            <!DOCTYPE html>
            <html>
            <div> 
              <form method='POST' action=''>
                <label>
                  Address:
                  <br></br>
                    <label>
                    line 1:
                      <input type='text' name='line1'/>
                    </label> <br></br>
                    <label>
                    line 2:
                      <input type='text' name='line2'/>
                    </label> <br></br>
                    <label>
                    city:
                      <input type='text' name='city'/>
                    </label> <br></br>
                    <label>
                    state:
                      <input type='text' name='state'/>
                    </label> <br></br>
                    <label>
                    zipcode:
                      <input type='text' name='zipcode'/>
                    </label> <br></br>
                </label> <br></br>
                <label>
                  Phone #:
                  <input type='text' name='phone'/>
                </label> <br></br>
                <input type='submit' name='submit'></input>
              </form>
            </div>
            </html>
            `
          );
        })
        .catch(err => {
          console.log('FAILED: querying account db');
          res.status(500);
          res.send(err);
        })
    .catch(err => {
        console.log('FAILED: Account insertion', err);
        res.status(500);
        res.send(err);
      });
    }) 
  } else if (req.body.line1 !== undefined) { // check if form 2 filled
    shoppingCartModel.ShippingInfo.create({ 
      line1: req.body.line1,
      line2: req.body.line2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      phone: req.body.phone,
    })
    .then(shippinginfo => {
      res.status(201);
      shoppingCartModel.ShippingInfo.findAll()
        .then(shippinginfo => {
          userData.shipping = shippinginfo[shippinginfo.length-1].dataValues;
          res.status(200);
          res.send( 
            `
            <!DOCTYPE html>
            <html>
            <div> 
            <form method='POST' action=''>
              <label>
                credit card #:
                <input type='text' name='creditcard'/>
              </label> <br></br>
              <label>
                exp date:
                <input type='text' name='expdate'/>
              </label> <br></br>
              <label>
                CVV:
                <input type='text' name='cvv'/>
              </label> <br></br>
              <input type='submit' name='submit'></input>
            </form>
          </div>
          </html>`
          );
        })
        .catch(err => {
          console.log('FAILED: querying shippingInfo db');
          res.status(500);
          res.send(err);
        })
    .catch(err => {
        console.log('FAILED: shippingInfo insert', err);
        res.status(500);
        res.send(err);
    });
    }) 
  } else if (req.body.creditcard !== undefined) { // check if form3 filled
    shoppingCartModel.BillingInfo.create({ 
      creditCard: req.body.creditcard,
      expdate: req.body.expdate,
      cvv: req.body.cvv,
    })
    .then(billing => {
      res.status(201);
      shoppingCartModel.BillingInfo.findAll()
        .then(billing => {
          debugger;
          res.status(200);
          res.send( 
            `<!DOCTYPE html>
            <html>
              <head>
                <meta charset='UTF-8'>
                <title>MiniApp: Challenge 2</title>
              </head>

              <pre>` 
                + JSON.stringify(userData.account) +
              `</pre>  
              <pre>` 
                + JSON.stringify(userData.shipping) +
              `</pre>  
              <pre>` 
                + JSON.stringify(billing[billing.length-1].dataValues) +
              `</pre>  

            </html>
            `
          );
        })
        .catch(err => {
          console.log('FAILED: querying billing db');
          res.status(500);
          res.send(err);
        })
    .catch(err => {
        console.log('FAILED: BillingInfo insertion', err);
        res.status(500);
        res.send(err);
      });
    }) 
  }
};


module.exports = {
  createAccount,
};