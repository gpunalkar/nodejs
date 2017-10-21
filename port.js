"use strict";
var http = require("http");
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 8001;

var server = http.createServer(function (req, res) {
    console.log("Server Creatig ...");
    
    console.log(port);
    res.end();
});

server.listen(port);
console.log("Server staring ...");    