const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 1337;


// Middleware
app.use(morgan('tiny'));
app.use(express.static('public'));

// Request Handling


// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({error: 'Not Found' });
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

