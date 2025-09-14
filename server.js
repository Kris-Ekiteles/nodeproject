//server
const Port = 3000;
const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, Node!</h1>\n');
}

);
server.listen(Port, () => {
    console.log(`Server running at http://localhost:${Port}/`);
});