var http = require('http');
var bl = require('bl');
var fs = require('fs');

var server = http.createServer(function(req, resp) {
  resp.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(process.argv[3]).pipe(resp);

});

server.listen(process.argv[2]);
