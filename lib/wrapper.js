// CoffeeScript (JS) wrapper for SocketStream 0.3

var fs = require('fs')
  , coffee = require('coffee-script');

exports.init = function(root, config) {

  return {

    name: 'CoffeeScript',

    extensions: ['coffee'],

    assetType: 'js',

    contentType: 'text/javascript; charset=utf-8',

    compile: function(path, options, cb) {    
      var input = fs.readFileSync(path, 'utf8');
      var output = coffee.compile(input, {bare: true}); // Note: Safety wrappers are provided by SocketStream
      cb(output);
    }
  }
}