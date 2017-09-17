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

- List of actually present events, new events will be added with v5.0.6 (if you want/need other events emitted, post them in the issue tracker as feature request)

```javascript
this.ws('getting_balances', data);
this.ws('gettting_trade_history', data);
this.ws('getting_open_orders');
this.ws('getting_public_trade_history', [this.getLedger().priceToBuy, this.getLedger().priceToSell]);
this.ws('getting_ta', [this.highBB,this.lowBB,this.smas]);
this.ws('sell_panic');
this.ws('sell_trade', [amountToSell, priceToSellNow]);
this.ws('message', 'STOP LIMIT REACHED!!! SELLING ALL YOUR ASSETS');
this.ws('sell_trailing_stop', [quoteBalance, this.Ask]);
this.ws('message', gunbotcallbacksell);
this.ws('message', 'WARNING: we couldnt get a BOUGHT PRICE');
this.ws('getting_ema_1', [ema1]);
this.ws('getting_ema_2', [ema2]);
this.ws('buy_trade', [quoteAmountToBuy, this.Ask]);
this.ws('message', thismessage);
this.ws('message', thismessage2);
this.ws('message', 'No btc');
this.ws('message', 'No new opportunities found');
```

- To start the GUI, put the webUI folder in your GUNBOT root and start it with node like node app.is
- I will provide binaries at every release for people that wont use/install node
 -To connect to your webUI visit this link http://localhost:3000/listener/ 

