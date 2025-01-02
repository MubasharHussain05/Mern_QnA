// How can you manage different
// environments (development, production,
// etc.) in an Express.js application?

// Managing different environments in an Express.js application can be done using environment variables and configuration files.
// Express.js provides a built-in process.env.NODE_ENV variable that can be used to determine the current environment.
// Here's an example of how to manage different environments in an Express.js application:

require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
console.log(`Environment: ${process.env.NODE_ENV}`);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
