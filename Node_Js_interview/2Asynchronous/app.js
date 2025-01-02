// How does Node.js handle asynchronous
// operations?
// Node.js handles asynchronous operations using its non-blocking 
// I/O model and an event-driven architecture. 

//1 Event Loop:

// The event loop is the heart of Node.js's asynchronous model.
// It continuously listens for events and processes callbacks associated with those events, 
// ensuring non-blocking execution.

// 2 Callbacks:

// A function passed as an argument to another function, executed when an asynchronous operation completes.
// const fs = require('fs');

// Asynchronous file read
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});

console.log('Reading file...');



//3 Promises:

// Promises are objects representing the eventual completion or failure of an asynchronous operation,
// offering a cleaner way to handle asynchronous flows.
// Example: .then() and .catch() are used to handle results or errors.
const fs = require('fs').promises;

// Asynchronous file read with Promises
fs.readFile('example.txt', 'utf-8')
    .then(data => console.log('File content:', data))
    .catch(err => console.error('Error reading file:', err));

console.log('Reading file...');

//4 Async/Await:

// A modern syntax built on top of Promises that allows writing asynchronous code in a synchronous
// style, improving readability.

const fs = require('fs').promises;

const readFileAsync = async () => {
    try {
        const data = await fs.readFile('example.txt', 'utf-8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
};

readFileAsync();
console.log('Reading file...');

