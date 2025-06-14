const http = require('http');

const port = process.env.PORT || 3000;
// This port needs environment variable.

const server = http.createServer((req, res) => {
    // console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h3> This is Code along with me </h3> <p> Hey you rock the server </p>');
});

server.listen(port, ()=> {
    console.log(`Server is listening on port: ${port}`);
});