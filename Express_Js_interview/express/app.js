// 1.What is Express.js?

// Express.js is a minimal and flex web application framework for Node.js. 
// It is the de facto standard server framework for Node.js. 
// it is an extremely papular with wide community support
// It is designed for building web applications and APIs. 
// It simplifies routing, middleware, request handling, response handling, and server creation.  
// It is very simple and minimal, unlike other frameworks that 
// try do way too much, thereby reducing the flexibility for developers to have their own design choices.

//Key Features of Express.js:

// 1 Middleware Support: Allows you to handle HTTP requests and responses, making it easy to implement custom functionality like authentication, logging, or error handling.
// 2 Routing: Provides a flexible and intuitive way to define routes and manage different HTTP methods (GET, POST, PUT, DELETE, etc.).
// 3 Template Engines: Supports integration with various template engines like EJS, Pug, or Handlebars to render dynamic HTML pages.
// 4 Compatibility with Node.js: Built on top of Node.js, it extends its functionality while maintaining speed and performance.
// 5 Extensibility: Offers a vast collection of third-party middleware and libraries to extend its functionality.
// 6 Error Handling: Includes built-in mechanisms to catch and process errors efficiently.

const express = require('express');
const app = express();
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
