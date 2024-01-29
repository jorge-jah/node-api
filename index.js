const http = require('node:http');

const HOSTNAME = 'localhost';
const PORT = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Resposta enviada!');
});

server.listen((PORT, HOSTNAME, () => {
    console.log(`Server runnig at http://${HOSTNAME}:${PORT}`);
}));