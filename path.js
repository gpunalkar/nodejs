"use strict";
var http = require("http");
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
    console.log("Server Creatig ...");

    var fb = path.basename('D:\\github\\nodejs\\Hello.html');
    var fbe = path.basename('D:\\github\\nodejs\\Hello.html', 'html');
    var fn = path.normalize('D:\\github\\nodejs\\Hello.html');
    var pe = process.env;
    console.log(fb);
    console.log(fbe);
    console.log(fn);
    
    console.log(pe);
    res.end();
});

server.listen(8002);
console.log("Server staring ...");    