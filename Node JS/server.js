// Server Using Express

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Hey there, this is main page of this application</h1>');
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname,"./index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


// Server Using http

// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const home = fs.readFileSync('./index.html');
// const about = fs.readFileSync('./about.html');
// const services = fs.readFileSync('./services.html');
// const contact = fs.readFileSync('./contact.html');

// const server = http.createServer((req, res)=>{

//     // console.log(req.url);
//     url = req.url;

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     if(url == '/'){
//         res.end(home);
//     }

//     else if(url == '/about') {
//         res.end(about);
//     }

//     else if(url == '/services') {
//         res.end(services);
//     }

//     else if(url == '/contact') {
//         res.end(contact);
//     }
    
//     else {
//         res.statusCode = 404;
//         res.end("<h1> 404 not found </h1>");
//     }

// });

// server.listen(port, hostname, () => {
//     console.log(`Server Listening at http://${hostname}:${port}`);
// });