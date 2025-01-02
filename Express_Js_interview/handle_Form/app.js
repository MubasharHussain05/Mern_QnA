// How do you handle form data and file
// uploads in Express.js?
// Handling form data and file uploads in Express.js can be done using middleware functions like multer and body-parser.
// Multer is a popular middleware for handling file uploads, while body-parser is used to parse incoming request bodies.
// Here's an example of how to handle form data and file uploads in Express.js:


const express = require('express');
const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Name: ${name}, Email: ${email}`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
