const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;
// This port needs environment variable.

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // console.log(req.url);

    // Serving file here as making server.
    if(req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('./index.html');
        res.end(data.toString());
    }

    else if(req.url == '/about') {
        res.statusCode = 200;
        res.end('<h3> This is About page </h3> <p> Hey you rock the server </p>');
    }

    else if(req.url == '/hello') {
            res.statusCode = 200;
            res.end('<h2> This is Code along with me </h2> <p> Hey you rock the server </p>');
        }

    else {
        res.harr(); // This used to crash
        res.statusCode = 404;
        res.end("<h2> Hey this page not found on the server </h2> ");
    }

});

server.listen(port, ()=> {
    console.log(`Server is listening on port: ${port}`);
});