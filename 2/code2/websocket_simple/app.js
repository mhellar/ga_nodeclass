var express = require("express");
var app = express();

// Set up a URL route
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// bind the app to listen for connections on a specified port
var server = app.listen(3000);
var io = require('socket.io')(server);

// Render some console log output
console.log("Listening on port " + 3000);

setInterval(function() {
    var i = Math.floor(Math.random() * 1000) + 1
        //emit data on a websocket called mysocket
    io.sockets.emit('mysocket', i);
    console.log(i);
}, 10);




