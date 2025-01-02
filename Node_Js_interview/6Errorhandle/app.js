//How do you handle errors in Node.js?

// Error handling is crucial in Node.js to ensure the stability and reliability of your application. 
// Here’s a detailed guide on how to handle errors effectively:

// 1. Error Types in Node.js
// Node.js errors generally fall into these categories:

// System Errors:

// Errors originating from the operating system or file system.
// Example: ENOENT (file not found).
// Application Errors:

// Errors caused by invalid user input or application logic.
// Example: Invalid JSON parsing.
// Operational Errors:

// Expected errors that occur during runtime and can usually be handled gracefully.
// Example: Database connection failure.
// Programming Errors:

// Bugs in your code.
// Example: Null reference or undefined variable.

try {
    const result = JSON.parse('invalid JSON string');
} catch (error) {
    console.error('Error parsing JSON:', error.message);
}


// promises

import fs from 'fs/promises';

fs.readFile('nonexistent.txt', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error reading file:', error.message);
    });


//     Handling Asynchronous Errors with Callbacks
// For callback-based APIs:

// javascript
// Copy code
import fs from 'fs';

fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log(data);
});

