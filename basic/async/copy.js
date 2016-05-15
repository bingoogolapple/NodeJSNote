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
    var rs = fs.createReadStream('./UIAutomator.zip');
    var ws = fs.createWriteStream('./files/UIAutomator.zip');

    console.log(1);

    // 只要发现有事件监听就会触发
    rs.on('data', function(chunk) {
        ws.write(chunk);
    });

    console.log(2);

    rs.on('end', function() {
        ws.end();
        console.log('done!');
    })

    console.log(3);
}

scopy();
