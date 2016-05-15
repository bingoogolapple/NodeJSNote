'use strict'
var fs = require('fs');

var fcopy = function() {
    console.log(1, Date.now());
    var source = fs.readFileSync('./copy.js', {encoding: 'utf-8'});
    console.log(2, Date.now());
    fs.writeFileSync('./files/copy.js', source);
    console.log(3, Date.now());
}

var scopy = function() {
    
}

fcopy();
