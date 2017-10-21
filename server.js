    "use strict";
    var http = require("http");
    var url = require("url");

    /* var server = http.createServer(function (request, response) {
        console.log("Server Creatig ...");
        console.log("got response", response.statusCode);
    }); */

    http.get({host: "localhost", port: "3000", path: "/users"}, function (request, response) {
        console.log("got response", response.statusCode);
        response.on("end", function () {
            console.log("Complete ...");
        });
    });
    var server = http.createServer();
    server.listen(3000);
    console.log("Server staring ...");