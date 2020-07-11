// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server

const port = 8080;

app.listen(port, async () => {
    console.log('The server is runing on http://localhost:8080');
});



function sum(a, b) {
    return a + b;
  }

 module.exports = sum;
