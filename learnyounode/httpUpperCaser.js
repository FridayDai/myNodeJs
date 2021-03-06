var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, resp) {
  if(req.method != 'POST') {
    return res.end('send me a POST\n');
  }

  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(resp);
});

server.listen(process.argv[2]);
