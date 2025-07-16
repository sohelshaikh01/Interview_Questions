## 🌐 Node.js One-Shot Tutorial Summary
Source: Code With Harry & NodeJS.dev

🚀 Introduction to Node.js

1. Client-Server Interaction:

The client sends a request to the server.
The server processes the request, performs logic, and sends a response.
The response is displayed on the client side.

2. Creation of Node.js:
Ryan Dahl built Node.js using Chrome’s V8 JavaScript engine, written in C++.

3. Node.js Uses:
Primarily used for backend development.
Runs JavaScript on the server.
Note: Node.js JavaScript differs slightly from browser-based JavaScript.

### 🛠 Installation:

1. Install Node.js from NodeJs.org.

Follow the default setup by clicking "Next".
Different versions may have minor changes.
After installation, Node.js will be available on your system.

Running a .js File:
Create a .js file (e.g., index.js).
Run it using the terminal: `node index.js` or `node index`.

### ⚙️ Key Concepts:
Non-Blocking Asynchronous I/O:
Single-threaded, handles multiple connections efficiently.
Ideal for real-time applications like chat and video calls.
Check Installation:

Check npm version: `npm --version`.
Check Node.js version: `node --version`.
npm: Node Package Manager, helps install packages.

### 📂 Working with Directories:
Initialize a Node.js Project:
Run npm init to create a package.json file with project details.

### Installing Packages:
Install a package: npm install [packageName] or npm i [packageName].
Example: `npm install express --save (installs Express.js)`.
To Install packages in global: `npm i [packageName] -g / --global`
Creates a node_modules folder with all dependencies (⚠️ Don't share this folder, it’s large).

### Nodemon:

Install globally: `npm i -g nodemon`.
Nodemon automatically restarts the server whenever you make changes to your files.
Install for development only: `npm install --save-dev nodemon`.

Uninstalling Packages:
Uninstall a package: `npm uninstall [packageName]`.

Angular CLI:
Install Angular CLI: `npm i @angular/cli`.
Understanding package.json:

Contains all dependencies and project info.
Understanding package-lock.json:

Stores the exact dependency tree, ensuring consistent installs.

### 📦 Modules in Node.js:

1. CommonJS Modules: Example:
```js
function simple() {
    console.log("simple");
}
module.exports = simple;
const simple = require("./modules1");
simple();
```

2. ES6 Modules: Example:
```js
export function simple1() {
    console.log("Simple is complex");
    return 45;
}
import {simple1} from "./modules2.mjs";
simple1();
```

### 🌐 Built-in Modules:

1. OS Module: os
2. Path Module: path
3. File System: fs

🌍 Working with URLs:
Import and print URL objects.

### 🔧 Building an HTTP Server:

Using Nodemon:
Useful for checking if the server is running correctly.
Displays real-time changes and errors.

Serving Files:
Using HTTPS server: Can be complex.
Using Express server: Simplifies the process.

### ☁️ Deployment in Node.js:
Deploy on Digital Ocean:
Choose a plan.
Set up login.
Create a project and hostname.
Set up project droplet and connection.