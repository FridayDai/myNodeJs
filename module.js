var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extName, callback){
  var fileList = [];
  fs.readdir(directoryName, function(err, files){
    if(err) return callback(err);

    files.forEach(function (file){
      if(path.extname(file) == ('.' + extName)){
        fileList.push(file);
      }
    });

    return callback(err, fileList);
  });
};
