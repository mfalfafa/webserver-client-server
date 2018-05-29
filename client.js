//import io from 'socket.io-client';
//var socket = io('http://192.168.10.187:5000');
var socket = require('socket.io-client')('http://192.168.10.187:5000');

socket.on('example-pong', function (data) {
    console.log(data.toString());
});

// window.addEventListener("load", function(){

//   var button = document.getElementById('hello');

//   button.addEventListener('click', function() {
//       console.log("ping");
//       socket.emit('aaa', { duration: 2 });
//   });

// });

setTimeout(function(){
	socket.emit("aaa", "Hello");
}, 3000);