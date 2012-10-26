// http, websocket, and browservers
var http   = require("http")
var engine = require("engine.io")
var brow   = require("browserver")

function handler(req, res) {
  // your usual HTTP server logic
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

}

// instantiate http and websocket servers
var httpServer = http.createServer(handler)
var wsServer   = engine.attach(httpServer)

// pass each to a new browserver...
var browServer = new brow.Server
browServer.listen(wsServer)
browServer.listen(httpServer, {hostname: "*.mydomain.org"})

// ... and start listening!
httpServer.listen(80, function() {
  // wait for incoming/outgoing browser connections...
})