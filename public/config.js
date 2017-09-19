{
	"ws": {
		"port": 5000,
		"clientport": 3000,
		"hostname": "127.0.0.1"
	},
	"bot": {
		"debug": true,
		"BOT_DELAY": 1,
		"interval_ticker_update": 25000,
		"period_storage_ticker": 2000,
		"timeout_buy": 60000,
		"timeout_sell": 60000,
		"TV_GAIN": 0.6,
		"TV_TRADING_LIMIT": 0.001,
		"TV_PROTECTION": true,
		"VERBOSE": true,
		"WATCH_MODE": false
	},
	"exchanges": {
		"bittrex": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"cryptopia": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"kraken": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"poloniex": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		}
	},
	"pairs": {
		"bittrex": {
			"BTC-LTC": {
				"strategy": "bb",
				"override": {
					"BUY_ENABLED": "false"
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
				"strategy": "bb"
			}
		}
	},
	"imap_listener": {
		"enabled": false,
		"authorized_froms": "[\"noreply@tradingview.com\"]",
		"user": "YOUR_EMAIL_HERE",
		"password": "YOUR_PASSWORD_HERE",
		"host": "imap.gmail.com",
		"port": 993,
		"tls": true,
		"tlsOptions": {
			"rejectUnauthorized": false
		}
	},
	"strategies": {
		"bb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"EMA1": 2,
			"EMA2": 4,
			"GAIN": 0.6,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMA_PERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 2,
			"GAIN": 2,
			"EMA1": 200,
			"EMA2": 50,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMA_PERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"pp": {
			"TRADING_LIMIT": 0.001,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"bbgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 0.6,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMA_PERIOD": 150,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gainbb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 2,
			"GAIN": 0.6,
			"HIGH_BB": 45,
			"LOW_BB": 40,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"bbstepgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMA_PERIOD": 150,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgainbb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"HIGH_BB": 49,
			"LOW_BB": 40,
			"STDV": 2,
			"SMA_PERIOD": 150,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"BUYLVL": 2,
			"GAIN": 0.6,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"bbpp": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 0.1,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMA_PERIOD": 150,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"ppbb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 0.1,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMA_PERIOD": 150,
			"PP_BUY": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gainstepgain": {
			"TRADING_LIMIT": 0.001,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMA_PERIOD": 150,
			"PERIOD": 15,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"SELLLVL": 2,
			"BUY_LEVEL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgaingain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"BUYLVL": 2,
			"GAIN": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"gainpp": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"PP_SELL": 0.12345678,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"STOP_LIMIT": 60,
			"DOUBLE_UP": false,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"ppgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"GAIN": 2,
			"PP_BUY": 0.12345678,
			"EMA1": 200,
			"EMA2": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"stepgainpp": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUYLVL1": 1,
			"BUYLVL2": 3,
			"BUYLVL3": 5,
			"BUYLVL": 2,
			"PP_SELL": 0.1,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		},
		"ppstepgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"SELLLVL1": 2,
			"SELLLVL2": 5,
			"SELLLVL3": 10,
			"SELLLVL": 2,
			"PP_BUY": 1e-8,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 1e-8,
			"EMA1": 2000,
			"EMA2": 1000,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001
		}
	},
	"optionals": {
		"toOverride": {
			"BOUGHT_PRICE": "0.104744"
		}
	}
}