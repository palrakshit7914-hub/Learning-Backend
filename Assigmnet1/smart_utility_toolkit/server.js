const https= require('https');

const PORT = 3000;

const server = https.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
})