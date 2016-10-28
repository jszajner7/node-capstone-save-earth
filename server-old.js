//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var server = http.Server(app);



var app = express();

//tell express to serve the public html pages
app.use(express.static('public'));

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];


io.on('connection', function (socket) {
    
    //logs the message
    console.log('New client connected');

    //sends a broadcast message to every socket but the one who made it occurr
    socket.broadcast.emit('message', 'New user connected');

    
    //when socket receives a 'message', logs that a new message was received, and broadcasts the message 
    //to all connected sockets except the one who sent it
    socket.on('message', function(message) {
        console.log('Received message:', message);
        socket.broadcast.emit('message',message);
    });

    //watching for the 'typing' socket type, broadcast to all users that someone is typing
    socket.on('typing',function() {
        socket.broadcast.emit('message','Someone is typing');
    });

    //when a socket disconnects, logs it and sends a disconnected message to all other sockets
    socket.on('disconnect', function(){
        socket.broadcast.emit('message', 'Client Disonnected');
        console.log('user disconnected');
    });
  
});

      // function broadcast(event, data) {
      //   sockets.forEach(function (socket) {
      //     socket.emit(event, data);
      //   });
      // }

      // server.listen(process.env.PORT || 8080, function(){
      //   var addr = server.address();
      //   console.log("Chat server listening at", addr.address + ":" + addr.port);
      // });
      server.listen(process.env.PORT || 8080);
     