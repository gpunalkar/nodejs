"use strict";
var http = require("http");
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log("Server Creatig ...");
    

    fs.readFile('resource.txt', function (err, data) {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/html' });
            console.log("got response", res.statusCode);
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
            console.log("got response", res.statusCode);
        }
        res.end();
    });
})

server.listen(8001);
console.log("Server staring ...");    