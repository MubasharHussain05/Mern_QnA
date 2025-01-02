//What is middleware in Express js?

// In Express.js, middleware refers to functions that execute during the request-response cycle. 
// These functions have access to the request (req) object, the response (res) object, and the 
// next() function, which passes control to the next middleware function in the stack.

// Middleware is a core concept in Express.js and is used to modify requests, process data, or 
// add functionality to your application.


const express = require('express');
const app = express();

// Custom middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

// Apply middleware
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
