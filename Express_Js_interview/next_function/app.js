// What is the role of the next function in
// middleware?

// The next function in middleware is used to pass control to the next middleware function in the stack.
// It is a callback function that is passed as an argument to the middleware function and is typically named next.
// When called, it passes control to the next middleware function in the stack.
// If the next function is not called, the request-response cycle will be terminated, and the client will receive no response.


app.use((req, res, next) => {
    console.log('Middleware 1');
    next(); // Pass control to the next middleware
  });
  
  app.use((req, res, next) => {
    console.log('Middleware 2');
    res.send('Response from Middleware 2');
  });
  