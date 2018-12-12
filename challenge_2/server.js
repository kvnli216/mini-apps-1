const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser'); // no longer need because of text input
const multer = require('multer')
const app = express();
const fs = require('fs');

const upload = multer({ dest: 'uploadJSON/'});
const type = upload.single('form');
const port = 3000;

// MIDDLEWARE
app.use(morgan('tiny')); // logging requests
// app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));

// REQUEST HANDLING
app.post('/', type, (req, res, next) => {

  fs.readFile(`./uploadJSON/${req.file.filename}`, function(err, data) {
    let formData = JSON.parse(data);
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
    csv = parseJSON(formData);
    
    // append to html in an entry for formatting and showing on screen
    // redirect to index.html
    // keep both output and form

    res.send(
      `<!DOCTYPE html>
        <html>
          <head>
            <meta charset='UTF-8'>
            <title>MiniApp: Challenge 2</title>
          </head>

          <form method='POST' action='/' enctype="multipart/form-data">
            <input type='file' name='form'>
            <input type='submit' name='submit'>
          </form>
          <pre>` 
            + csv + `
          </pre>  
        <script src='./app.js'></script>
      </html>`
    );
  });
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

