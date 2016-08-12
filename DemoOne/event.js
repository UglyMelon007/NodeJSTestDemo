//event.js

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.once('test_event', function() {
	console.log('test_event occured');
});

setInterval(function() {
	event.emit('test_event');
}, 1000);
