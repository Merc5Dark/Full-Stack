let http = require('http');

// create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // write a response to the client
    res.end('Hello NodeJS');// ending the response
}).listen(8000); // the server object listens to the port chosen