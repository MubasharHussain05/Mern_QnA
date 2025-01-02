// What is Node.js?
// Node.js is an open-source, cross-platform runtime environment for executing JavaScript code outside the browser. 
// Built on Chrome's V8 JavaScript engine, it enables developers to use JavaScript for server-side programming, revolutionizing web development.

// Node.js powers many modern applications, including Netflix, LinkedIn, and PayPal. Its ability to build fast, scalable, 
// and real-time applications makes it a must-learn technology for web developers.

// Key Features of Node.js
// JavaScript Runtime: Run JavaScript code outside the browser.
// Cross-Platform: Compatible with multiple operating systems.
// Non-Blocking I/O: Handles multiple requests efficiently.
// Package Manager (npm): Access thousands of reusable libraries.
//Single-Threaded Architecture:

//Node.js operates on a single-threaded event loop model, which allows it to handle thousands of concurrent connections efficiently.

// Advantages
// High Performance: Non-blocking, asynchronous operations.
// Large Ecosystem: Access to a massive collection of libraries via npm.
// Fast Development: Shared codebase between frontend and backend using JavaScript.
// Active Community: Constant updates and support from a global developer community.

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
