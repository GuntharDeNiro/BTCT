Work in progress
- https://127.0.0.1:5000/?gui=native // to allow SSL exception in chrome
- Events are emit from Gunbot like this > this.ws('getting_order_book', [this.Ask, this.Bid]);
- This will return this.Ask and this.Bid in the "message"
- We listen to the "message" on port we set in ws section in Gunbot config.js

```javascript
ws = new WebSocket('wss://127.0.0.1:5000/?gui=native', {
		rejectUnauthorized: false
	});
	connected = true;

	ws.on('error', (err) => {
		connected = false;
		console.log(err.code);
	});
	
	ws.on('message', function incoming(data) {

	console.log(data);

	});
```

When an error is caught, Gunbot emits a message like this:

```javascript
}).catch((e) => {
	this.ws('getting_order_book', [], e.message);
```

So every wss message will have its own catch message if try method fails
