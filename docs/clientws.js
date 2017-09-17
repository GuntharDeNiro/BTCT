'use strict';
console.log("START");

let ws;
let connected = false;
const WebSocket = require('ws');
//const lib = require('../lib.js');



setInterval(() => {

	console.log("INTERVAL");

	if (connected)
		return false;

	ws = new WebSocket('wss://127.0.0.1:5000/?gui=native', {
		rejectUnauthorized: false
	});
	connected = true;

	ws.on('error', (err) => {
		connected = false;
		console.log(err.code);
	});
	
	ws.on('message', function incoming(data) {

		console.log('message received');

	});
}, 1000);
