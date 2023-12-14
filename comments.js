const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hello', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hello', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/bye', (req, res) => {
    res.sendFile(__dirname + '/views/bye.html');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hello', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/bye', (req, res) => {
    res.sendFile(__dirname + '/views/bye.html');
});

app.get('/hello/:name', (req, res) => {
    res.send('Hello, ' + req.params.name);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hello', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
