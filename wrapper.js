// CoffeeScript (JS) wrapper for SocketStream 0.3 and 0.4.x

var fs = require('fs'),
    coffee = require('coffeescript');

exports.init = function(root, config) {

  coffee.register();

  return {

    name: 'CoffeeScript',

    extensions: ['coffee'],

    assetType: 'js',

    contentType: 'text/javascript; charset=utf-8',

    compile: function(path, options, cb) {    
      var input = fs.readFileSync(path, 'utf8');
      try {
        cb( coffee.compile(input, {bare: true}) );
      } catch (e) {
        var message = "! Error compiling " + path + " into CoffeeScript";
        console.log(String.prototype.hasOwnProperty('red') && message.red || message);
        cb("Error compiling to CoffeeScript: " + e.stack);
        throw new Error(e);
      }
    }
  };
};
