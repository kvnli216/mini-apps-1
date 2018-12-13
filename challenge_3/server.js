const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const router = require('./serverRouter');
// const db = require('./db');
// const cors = require('cors');

const port = 1337;

// Middleware
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded());

// Request Handling (routed)
app.use('/', router);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({error: 'Not Found' });
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

