// // How do you manage package
// // dependencies in a Node.js project?

// Managing package dependencies in a Node.js project is crucial for maintaining a clean, organized, and 
// functional codebase. This is typically done using npm (Node Package Manager) or Yarn,
//  which are tools to install, update, and manage dependencies.

// 1. Initializing a Node.js Project
// Before managing dependencies, initialize your project to create a package.json file. This file acts as a manifest for your project and its dependencies.

// bash
// Copy code
// npm init -y
// This command creates a package.json file with default values. You can modify it later as needed.

// 2. Installing Dependencies
// a. Install a Dependency
// To install a package and add it to the dependencies section of package.json:

// bash
// Copy code
// npm install <package-name>
// Example:

// bash
// Copy code
// npm install express
// This adds express to the dependencies section in package.json.

// b. Install a Development Dependency
// For packages needed only during development (e.g., testing frameworks, linters):

// bash
// Copy code
// npm install <package-name> --save-dev
// Example:

// bash
// Copy code
// npm install nodemon --save-dev
// This adds nodemon to the devDependencies section in package.json.

// 3. Updating Dependencies
// a. Check for Updates
// Use the following command to see if any dependencies are outdated:

// bash
// Copy code
// npm outdated
// b. Update a Specific Dependency
// To update a specific package to the latest version:

// bash
// Copy code
// npm install <package-name>@latest
// c. Update All Dependencies
// To update all dependencies to their latest versions:

// bash
// Copy code
// npm update
// For stricter updates, you can manually edit version numbers in package.json and run:

// bash
// Copy code
// npm install
// 4. Removing Dependencies
// To uninstall a package and remove it from package.json:

// bash
// Copy code
// npm uninstall <package-name>
// Example:

// bash
// Copy code
// npm uninstall express
// This removes express from both your project and the dependencies section in package.json.

// 5. Version Control of Dependencies
// Dependencies in package.json are listed with version numbers. These follow the semantic versioning (semver) convention:

// Major: Breaking changes (e.g., ^2.0.0).
// Minor: Backward-compatible new features (e.g., ^1.5.0).
// Patch: Backward-compatible bug fixes (e.g., ^1.0.3).
// Common symbols:

// ^: Allows updates to minor and patch versions (e.g., ^1.0.0 allows 1.x.x updates).
// ~: Allows updates to the patch version only (e.g., ~1.0.0 allows 1.0.x updates).
// 6. Locking Dependencies
// a. package-lock.json
// When you install packages, npm automatically generates a package-lock.json file. This locks the exact versions of installed packages and their dependencies, ensuring consistency across environments.

// Commit package-lock.json to version control to avoid "works on my machine" issues.
// 7. Dependency Management Commands
// a. Install All Dependencies
// Install all dependencies listed in package.json:

// bash
// Copy code
// npm install
// b. List Installed Packages
// View all installed packages:

// bash
// Copy code
// npm list
// c. Install Packages Globally
// For packages used across multiple projects (e.g., CLI tools):

// bash
// Copy code
// npm install -g <package-name>
// Example:

// bash
// Copy code
// npm install -g nodemon
// 8. Using .npmrc for Configuration
// You can customize npm behavior using an .npmrc file. For example, you can set a private registry or define cache locations.

// 9. Checking for Security Vulnerabilities
// a. Audit Dependencies
// Scan for vulnerabilities:

// bash
// Copy code
// npm audit
// b. Fix Vulnerabilities
// Automatically fix vulnerabilities:

// bash
// Copy code
// npm audit fix
// 10. Alternative to npm: Yarn
// Yarn is an alternative package manager to npm with similar functionality.

// Install Yarn:
// bash
// Copy code
// npm install -g yarn
// Install dependencies using Yarn:
// bash
// Copy code
// yarn install