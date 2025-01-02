// What are some common use cases for
// Node.js?

// Modules in Node.js are reusable pieces of code that can be easily exported and imported in your application. 
// They allow developers to break an application into smaller, manageable, and reusable chunks, making the codebase 
// easier to organize and maintain.

// Types of Modules in Node.js
// a. Built-in Modules
// Node.js comes with several built-in modules that provide core functionalities.

// Examples:
// fs (File System): For file operations.
// http: For creating servers.
// path: For working with file paths.
// os: For system-related information.
// b. External Modules
// These are third-party modules available via npm (Node Package Manager).

// Examples:
// express: For building web applications.
// mongoose: For MongoDB interaction.
// axios: For HTTP requests.
// c. User-defined Modules
// Custom modules created by developers to encapsulate specific functionality.

// 2. How to Use Modules in Node.js
// Importing and Exporting Modules
// Node.js follows the CommonJS module system by default and also supports ES Modules (ESM).

// a. CommonJS Modules

// app.js
const math = require('./math');

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2


