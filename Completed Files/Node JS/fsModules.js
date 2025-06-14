const fs = require('fs'); 

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// });
// // It takes file name, encoding type then
// // Callback function which gives err or data.
// // Callback run when file data is ready.

// // This line executed before above bccause it works on non-blocking IO or
// console.log("Finished reading file");

// const a = fs.readFileSync('file.txt');
// // This block code until file content is ready.
// console.log(a.toString());


// fs.writeFile('file2.txt', "This is a file next", ()=> {
//     console.log("written to the file");
// });
// File name, content, callback function
// It create file is not present and write in that.

b = fs.writeFileSync('file2.txt', "This is a file next");
console.log(b);
// It takes path and data content, It block further code until this write in the file 

console.log("Finish reading file");