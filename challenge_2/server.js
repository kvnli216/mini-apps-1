const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();

const port = 3000;

// MIDDLEWARE
app.use(morgan('tiny')); // logging requests
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));
app.use(fileUpload);


// REQUEST HANDLING
app.post('/uploadJSON', (req, res, next) => {

  debugger;
  let formData = JSON.parse(req.body.form);
  let csv = '';
  let arr = [];
  for (let key in formData) {
    if (key !== 'children') {
      arr.push(key);
    }
  }
  csv = arr.join(',') + '\n';

  let parseJSON = (form) => {
    arr = [];
    for (let key in form) {
      if (key === 'children') {
        csv += arr.join(',');
        for (let i = 0; i < form.children.length; i++) {
          csv += '\n';
          return parseJSON(form.children[i]);
        }
        if (form.children.length === 0) {
          return csv;
        }
      } else {
        arr.push(form[key]);
      } 
    }
  };
  debugger;
  csv = parseJSON(formData);
  res.send(csv);
});


// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

// START SERVER
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

