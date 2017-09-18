{
	"ws": {
		"port": 5000,   // gunbot websocket port
		"clientport": 3000,  // gunbot webgui port
		"hostname": "127.0.0.1"  //ip address usable between client and server
	},
	"bot": {
		"VERBOSE": true,
		"WATCH_MODE": false,
		"debug": true,
		"interval_ticker_update": 25000,
		"period_storage_ticker": 2000,
		"timeout_buy": 60000,
		"timeout_sell": 60000
	},
	"exchanges": {
		"bittrex": {
			"key": "pk3",
			"secret": "ps3"
		},
		"cryptopia": {
			"key": "pk4",
			"secret": "pk5"
		},
		"kraken": {
			"key": "pk2",
			"secret": "ps2"
		}
	},
	"optionals": {
		"toOverride": {
			"BOUGHT_PRICE": "0.104744",
			"test": "123"
		}
	},
	"pairs": {
		"bittrex": {
			"BTC-LTC": {
				"strategy": "bb",
				"override": {
					"a": "[object Object]",
					"b": "[object Object]"
				}
			}
		},
		"cryptopia": {
			"SIGT_BTC": {
				"strategy": "bb"
			},
			"XMR_BTC": {
				"strategy": "bb"
			},
			"ETH_BTC": {
				"strategy": "bb"
			}
		},
		"kraken": {
			"DASHEUR": {
				"strategy": "bb"
			},
			"XLTCXXBT": {
				"strategy": "bb"
			},
			"XETHXXBT": {
				"strategy": "bb"
			}
		},
		"poloniex": {
			"BTC_XMR": {
				"strategy": "bb"
			},
			"BTC_ETH": {
				"strategy": "bb"
			},
			"eBTC_ETC": {
				"strategy": "bb",
				"override": {
					"variable": "[object Object]"
				}
			}
		}
	},
	"strategies": {
		"bb": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"DOUBLE_UP": true,
			"GAIN": 0.6,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"STOP_LIMIT": 60
		},
		"bbgain": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"DOUBLE_UP": true,
			"EMA1": 200,
			"EMA2": 50,
			"GAIN": 0.6,
			"LOW_BB": 45,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"STOP_LIMIT": 60
		},
		"bbpp": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"GAIN": 0.1,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"PP_SELL": 0.12345678,
			"STOP_LIMIT": 60
		},
		"bbstepgain": {
			"AVGMINIMUM": 1e-8,
			"AVGPOINTS": 250,
			"BTC_TRADING_LIMIT": 0.001,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"EMA1": 2000,
			"EMA2": 1000,
			"HIGH_BB": 45,
			"LASTPOINTS": 5,
			"LOW_BB": 45,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"SELLLVL": 3,
			"SELLLVL1": 0.1,
			"SELLLVL2": 0.1,
			"SELLLVL3": 70,
			"STOP_LIMIT": 60
		},
		"gain": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 0.1,
			"EMA1": 200,
			"EMA2": 50,
			"GAIN": 2,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"STOP_LIMIT": 60
		},
		"gainbb": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 0.1,
			"DOUBLE_UP": true,
			"EMA1": 200,
			"EMA2": 50,
			"GAIN": 0.6,
			"HIGH_BB": 49,
			"LOW_BB": 40,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"STOP_LIMIT": 60
		},
		"gainpp": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 0.1,
			"EMA1": 2000,
			"EMA2": 1000,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"PP_SELL": 0.12345678,
			"STOP_LIMIT": 60
		},
		"gainstepgain": {
			"AVGMINIMUM": 1e-8,
			"AVGPOINTS": 250,
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"BUY_LEVEL": 0.1,
			"EMA1": 200,
			"EMA2": 50,
			"LASTPOINTS": 5,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"SELLLVL": 3,
			"SELLLVL1": 0.1,
			"SELLLVL2": 0.1,
			"SELLLVL3": 70,
			"STOP_LIMIT": 60
		},
		"pp": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"STOP_LIMIT": 60
		},
		"ppbb": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"GAIN": 0.1,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"PP_BUY": 1e-8,
			"STOP_LIMIT": 60
		},
		"ppgain": {
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"EMA1": 200,
			"EMA2": 50,
			"GAIN": 2,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"PP_BUY": 0.12345678,
			"STOP_LIMIT": 60
		},
		"ppstepgain": {
			"AVGMINIMUM": 1e-8,
			"AVGPOINTS": 250,
			"BTC_TRADING_LIMIT": 0.01,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"EMA1": 2000,
			"EMA2": 1000,
			"LASTPOINTS": 5,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"PP_BUY": 1e-8,
			"SELLLVL": 2,
			"SELLLVL1": 2,
			"SELLLVL2": 5,
			"SELLLVL3": 10,
			"STOP_LIMIT": 60
		},
		"stepgain": {
			"AVGMINIMUM": 1e-8,
			"AVGPOINTS": 250,
			"BTC_TRADING_LIMIT": 0.02,
			"BUYLVL": 3,
			"BUYLVL1": 0.1,
			"BUYLVL2": 0.1,
			"BUYLVL3": 70,
			"BUY_ENABLED": true,
			"EMA1": 2000,
			"EMA2": 1000,
			"LASTPOINTS": 5,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"SELLLVL": 3,
			"SELLLVL1": 0.1,
			"SELLLVL2": 0.1,
			"SELLLVL3": 70,
			"STOP_LIMIT": 60
		},
		"stepgainbb": {
			"AVGMINIMUM": 1e-8,
			"AVGPOINTS": 250,
			"BTC_TRADING_LIMIT": 0.001,
			"BUYLVL": 3,
			"BUYLVL1": 0.1,
			"BUYLVL2": 0.1,
			"BUYLVL3": 70,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"EMA1": 2000,
			"EMA2": 1000,
			"HIGH_BB": 49,
			"LASTPOINTS": 5,
			"LOW_BB": 40,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"STOP_LIMIT": 60
		},
		"stepgaingain": {
			"AVGMINIMUM": 1e-8,
			"AVGPOINTS": 250,
			"BTC_TRADING_LIMIT": 0.01,
			"BUYLVL": 3,
			"BUYLVL1": 0.1,
			"BUYLVL2": 0.1,
			"BUYLVL3": 70,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"EMA1": 2000,
			"EMA2": 1000,
			"GAIN": 0.6,
			"LASTPOINTS": 5,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"STOP_LIMIT": 60
		},
		"stepgainpp": {
			"AVGMINIMUM": 1e-8,
			"AVGPOINTS": 250,
			"BTC_TRADING_LIMIT": 0.01,
			"BUYLVL": 2,
			"BUYLVL1": 1,
			"BUYLVL2": 3,
			"BUYLVL3": 5,
			"BUY_ENABLED": true,
			"DOUBLE_UP": false,
			"EMA1": 2000,
			"EMA2": 1000,
			"LASTPOINTS": 5,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"PANIC_SELL": false,
			"PERIOD": 15,
			"PP_SELL": 0.1,
			"STOP_LIMIT": 60
		}
	}
}
