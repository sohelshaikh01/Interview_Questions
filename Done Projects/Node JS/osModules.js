const os = require('os');

// This is used to get information about OS using node

console.log(os.freemem());
// It show free memory in your system;

console.log(os.homedir()); // show home directory
console.log(os.hostname()); // show host name of pc
console.log(os.platform()); // show os platform
console.log(os.release()); // show release version
console.log(os.type());  // show the type