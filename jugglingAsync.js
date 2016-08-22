var http = require('http');
var bl = require('bl');

// function getDataFromServer(url, callback){
//   http.get(url, function(resp) {
//     resp.pipe(bl(function(err, data) {
//       if(err) throw err;
//
//       data = data.toString();
//       console.log(data);
//
//       if(callback) {
//         callback();
//       }
//     }));
//   });
// }
//
// getDataFromServer(process.argv[2], function(){
//   getDataFromServer(process.argv[3], function(){
//     getDataFromServer(process.argv[4]);
//   });
// });

//this is the standard answer
var results = [];
var count = 0;

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function(resp){
    resp.pipe(bl(function(err, data){
      results[index] = data.toString();

      count++;
      if(count === 3) {
        printResults();
      }
    }));
  });
}

for(var i = 0; i < process.argv.length - 2; i++) {
  httpGet(i);
}
