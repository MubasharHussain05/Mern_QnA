//How do you define routes in Express.js?


// In Express.js, routes define the endpoints of your application where specific 
// HTTP requests (like GET, POST, PUT, DELETE, etc.) are handled. Each route is 
// associated with a path and an HTTP method. When a request matches a route, 
// the corresponding callback function (or middleware) is executed.

const express = require('express');
const app = express();

// Define a GET route for the root path
app.get('/users', (req, res) => {
    res.send('List of users');
  });
  
  app.post('/users', (req, res) => {
    res.send('Create a new user');
  });
  
  app.put('/users/:id', (req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  });
  
  app.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });
  

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
