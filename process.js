"use strict";
var http = require("http");
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
    console.log("Server Creatig ...");
    var pe = process.env;
    var peb = process.env.Brand;
    var hp = process.env.HOMEPATH;
    var temp = process.env.TEMP;
    
    console.log(peb);
    console.log(hp);
    console.log(temp);
    res.end();
});

server.listen(8002);
console.log("Server staring ...");    