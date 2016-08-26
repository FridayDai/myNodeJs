//approach one(although this is low, but it is practical and easy to understand.)

 var http = require('http');
//
// http.get(process.argv[2], function(resp){
//   var buffer = [];
//   resp.setEncoding('utf8');
//   resp.on('data',function(data){
//         buffer.push(data);
//   });
//
//   resp.on('end',function(){
//     var str = '';
//     buffer.forEach(function(word){
//       str += word;
//     });
//
//       console.log(str.length);
//       console.log(str);
//   });
// });


//approach two use BufferList(bl)

var bl = require('bl');

http.get(process.argv[2], function(resp) {
  resp.pipe(bl(function(err, data) {
    if(err) throw err;

    var serverData = data.toString();
    console.log(serverData.length);
    console.log(serverData);
  }));
});
