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