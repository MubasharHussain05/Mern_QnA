// How do you handle errors in Express.js?
//Handling errors in Express.js can be done using middleware functions.Express.js provides a built-in error-handling middleware 
// that can be used to catch and process errors in your application. This middleware function takes four arguments (err, req, res, next) 
// and is defined with an additional parameter (err) to handle errors. Here's an example of how to handle errors in Express.js:

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  throw new Error('Something went wrong!'); // Throw an error
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).send('Something broke!'); // Send a response
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// In this example, an error is thrown when a GET request is made to the root path. The error-handling middleware function is defined using