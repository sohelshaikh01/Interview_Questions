// Path modules in Node.js

const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');
console.log(a); //  return basename of path of this module
const ab = path.dirname('C:\\temp\\myfile.html')
console.log(ab); // return directory path name
const ac = path.extname(__filename); 
console.log(ac); // return this file extension