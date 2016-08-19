// var fs = require('fs');
// var path = require('path');
//
// function filterFiles(directoryName, ext, callback){
//   fs.readdir(directoryName ,function(err, files) {
//     if (err) throw err;
//
//     for(var i = 0; i < files.length; i++) {
//       if(path.extname(files[i]) === ('.'+ ext)) {
//         console.log(files[i]);
//       }
//     }
//   });
// }
//
// module.exports = filterFiles;
// var myModule = require('./module.js');
//
// myModule(process.argv[2], process.argv[3], function(err, list){
//   if(err) {
//     console.log('something error');
//   }
//
//   list.forEach(function(file){
//     console.log(file);
//   });
// });


var http = require('http');

http.get(process.argv[2], function(resp){
  resp.setEncoding('utf8');
  resp.on('data', function(data){
    console.log(data);
  });
});
