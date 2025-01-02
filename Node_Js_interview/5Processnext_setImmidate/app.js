// What is the difference between
// process.nextTick() and setImmediate()?

// Both process.nextTick() and setImmediate() are used to schedule tasks in Node.js, 
// but they behave differently in the Node.js event loop.

// process.nextTick()
// When It Executes:

// Tasks scheduled with process.nextTick() are executed immediately after the current operation completes and before the event loop moves to the next phase (including I/O events or timers).
// Priority:

// It has higher priority than tasks scheduled with setImmediate().
// Any process.nextTick() callbacks are executed before moving on to other tasks in the event loop, even if those tasks were scheduled earlier.
// Use Case:

// Used for deferring a task to the end of the current operation without waiting for the next phase of the event loop.

console.log('Start');

process.nextTick(() => {
    console.log('NextTick callback');
});

console.log('End');

// setImmediate()
// When It Executes:

// Tasks scheduled with setImmediate() are executed in the Check phase of the event loop, after the current Poll phase is completed.
// Priority:

// It has lower priority than process.nextTick().
// If process.nextTick() is called within a setImmediate() callback, the nextTick will execute first.
// Use Case:

// Used for scheduling a task to be executed after the current Poll phase completes, ensuring it doesn’t block I/O operations.

console.log('Start');

setImmediate(() => {
    console.log('SetImmediate callback');
});

console.log('End');
