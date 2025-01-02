// What are streams in Node.js and how are
// they used?

// Streams in Node.js are objects that facilitate reading or writing data incrementally, in chunks, 
// rather than loading all the data into memory at once. This makes them efficient for handling large
// amounts of data, like files, network requests, or real-time communication.

// Types of Streams
// Readable Streams:

// Used to read data.
// Examples: fs.createReadStream(), HTTP requests.
// Writable Streams:

// Used to write data.
// Examples: fs.createWriteStream(), HTTP responses.
// Duplex Streams:

// Both readable and writable.
// Examples: TCP sockets (net.Socket).
// Transform Streams:

// A type of duplex stream that can modify or transform data as it is read or written.
// Examples: zlib.createGzip() for compression.

// Key Features of Streams
// Chunked Data:

// Streams process data piece-by-piece (chunk-by-chunk) instead of loading it all into memory.
// Event-Driven:

// Streams emit events like data, end, error, and finish to notify about the state of the data.
// Piping:

// Streams can be connected using .pipe(), making it easy to transfer data between them.

import fs from 'fs';

// Create a readable stream
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Handle events
readableStream.on('data', chunk => {
    console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('Stream ended.');
});

readableStream.on('error', err => {
    console.error('Error:', err);
});

