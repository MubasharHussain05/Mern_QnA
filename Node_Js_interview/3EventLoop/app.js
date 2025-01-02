// what is the event loop in Node.js?

// The event loop is a mechanism in Node.js that enables non-blocking I/O operations 
// by allowing the server to handle multiple requests simultaneously without waiting 
// for any task to complete before moving to the next. It is the heart of Node.js’s asynchronous architecture.

// How Does the Event Loop Work?
// The event loop continuously monitors and manages the execution of operations such as I/O tasks, timers, callbacks, and other asynchronous tasks. It is responsible for:

// Delegating tasks to worker threads or the operating system.
// Monitoring the completion of these tasks.
// Adding their associated callbacks to the queue for execution.


console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 0);

setImmediate(() => {
    console.log('Immediate callback');
});

console.log('End');
