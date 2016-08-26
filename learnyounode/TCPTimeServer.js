var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  socket.write(strftime('%F %H:%M\n', new Date()));

  socket.end();
});
server.listen(process.argv[2]);

// function zeroFill(i) {
//   return (
//     i < 10 ? ('0' + i) : ('' + i)
//   );
// }
//
// console.log(zeroFill(18));
// console.log(zeroFill(8));
