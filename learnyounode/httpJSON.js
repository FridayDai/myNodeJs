var http = require('http');
var url = require('url');

var server = http.createServer(function(req, resp) {
  var reqURL = url.parse(req.url, true);
  var time = new Date(reqURL.query.iso);
  var result;

    if(/^\/api\/parsetime/.test(req.url)) {
      result = {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
    }
    if (/^\/api\/unixtime/.test(req.url)) {
        result = {
          unixtime: time.getTime()
        };
    }

  if(result) {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.end(JSON.stringify(result));
  } else {
    resp.writeHead(404);
    resp.end('404');
  }

});

server.listen(process.argv[2]);
