"use strict";
var http = require("http");
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log("Server Creatig ...");
        var txt = "This is my resource file \n";
  
    fs.unlink('resource1.txt', function (err) {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/html' });
            console.log("got response", res.statusCode);
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' });
            // res.write(data);
            console.log("got response", res.statusCode);
        }
        res.end();
    });
})
server.listen(8002);
console.log("Server staring ...");    