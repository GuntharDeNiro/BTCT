var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
const { StringDecoder } = require('string_decoder');
var spawn = require('child_process').spawn;
var app = express();
var isPi = require('detect-rpi');
var os = osDetection();
var gbStart;
var gbStatus = false;

function osDetection() {
    if (process.platform == 'linux' || process.platform == 'sunos' || process.platform == 'freebsd') {
        return './gunthy-linx64';
    } else if (process.platform == 'darwin') {
        return './gunthy-macos';
    } else if (isPi()) {
        return 'gunthy-arm';
    }
}

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Gunthy');
});

app.get('/gbstart', function (req, res) {
    if (gbStatus)
        return;

    var isWin = /^win/.test(process.platform);
    gbStart = spawn(isWin ? 'cmd' : 'sh', [isWin ? '/c' : '-c', isWin ? 'gunthy.exe' : os]);
    gbStatus = true;

    console.log('gunbot have been started');

    gbStart.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
    });

    gbStart.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
    });

    gbStart.on('close', (code) => {
            console.log(`gunbot have been stopped`);
    });
});

app.get('/gbstop', function (req, res) {
    gbStatus = false;
    var kill  = require('tree-kill');
    kill(gbStart.pid);
});

app.put('/gbstatus', function (req, res) {
    if (!gbStatus) {
        res.send(false);
    } else {
        res.send(true);
    }
});

app.get('/getConfig', function (req, res) {
    var json = fs.readFileSync('config.js');
    var decoder = new StringDecoder('utf8');

    json = decoder.write(json);
    json = JSON.parse(json);

    res.send(json);
});


app.get('/listener', function (req, res) {
    console.log(req.params);
    res.sendFile(__dirname + '/listener.html');
});

app.get('/listener/gethost', function( req, res) {
    var json = fs.readFileSync('config.js', {});
    var decoder = new StringDecoder('utf8');

    json = decoder.write(json);
    json = JSON.parse(json);

    res.send('var config = ' + JSON.stringify(json.ws) +';');
});

app.get('/listener/:exchange/:pair', function (req, res) {
    console.log(req.params);
    var web = fs.readFileSync('listener.html', {});
    var decoder = new StringDecoder('utf8');

    web = decoder.write(web);

    web = web.replace(/exchange-placeholder/g, req.params.exchange).replace(/pair-placeholder/g, req.params.pair);
    res.send(web);
});

app.get('/config-num', function (req, res) {
    console.log(req.params);
    var json = fs.readFileSync('public/config.js', {});
    var decoder = new StringDecoder('utf8');

    json = decoder.write(json);
    json = JSON.parse(json);



    for (var k in json.optionals.toOverride) {
        if (json.optionals.toOverride.hasOwnProperty(k)) {

            if(['BUY_ENABLED', 'DOUBLE_UP', 'PANIC_SELL', 'VERBOSE', 'WATCH_MODE', 'debug'].indexOf(k) >= 0) {

                console.log(k, json.optionals.toOverride[k], json.optionals.toOverride[k]? 1 : 0);

                json.optionals.toOverride[k] = json.optionals.toOverride[k]? 1 : 0;
            }

        }
    }

    for (k in json.pairs) {
        if (json.pairs.hasOwnProperty(k)) {

            for(var k2 in json.pairs[k]) {
                if (json.pairs[k].hasOwnProperty(k2)) {

                    for(var k3 in json.pairs[k][k2].override) {

                        if (json.pairs[k][k2].override.hasOwnProperty(k3)) {
                            if(['BUY_ENABLED', 'DOUBLE_UP', 'PANIC_SELL', 'VERBOSE', 'WATCH_MODE', 'debug'].indexOf(k3) >= 0) {


                                json.pairs[k][k2].override[k3] = json.pairs[k][k2].override[k3]? 1 : 0;
                            }
                        }
                    }
                }
            }
        }
    }


    json = JSON.stringify(json);
    res.send(json);
});

app.get('/get_pairs/:exchange', function (req, res) {
    console.log(req.params);

    var json = fs.readFileSync('config.js', {});
    var decoder = new StringDecoder('utf8');

    json = decoder.write(json);
    json = JSON.parse(json);

    var pairs = Object.keys(json.pairs[req.params.exchange]);

    pairs = JSON.stringify(pairs);

    console.log(pairs);

    res.send(pairs);
});


app.post('/updateconfig', function (req, res) {

    var json = req.body;

    for (var k in json.optionals.toOverride) {
        if (json.optionals.toOverride.hasOwnProperty(k)) {

            console.log(k);

            if(['BUY_ENABLED', 'DOUBLE_UP', 'PANIC_SELL', 'VERBOSE', 'WATCH_MODE', 'debug'].indexOf(k) >= 0) {

                // If it is a number
                if(!isNaN(json.optionals.toOverride[k])) {
                    json.optionals.toOverride[k] = json.optionals.toOverride[k] > 0.5;
                } else if(json.optionals.toOverride[k] === "true") {
                    json.optionals.toOverride[k] = true;
                } else if(json.optionals.toOverride[k] === "false") {
                    json.optionals.toOverride[k] = false;
                }


            } else {
                json.optionals.toOverride[k] = parseFloat(json.optionals.toOverride[k]);
            }

        }
    }

    for (k in json.pairs) {
        if (json.pairs.hasOwnProperty(k)) {

            for(var k2 in json.pairs[k]) {
                if (json.pairs[k].hasOwnProperty(k2)) {

                    for(var k3 in json.pairs[k][k2].override) {

                        if (json.pairs[k][k2].override.hasOwnProperty(k3)) {
                            if(['BUY_ENABLED', 'DOUBLE_UP', 'PANIC_SELL', 'VERBOSE', 'WATCH_MODE', 'debug'].indexOf(k3) >= 0) {
                                json.pairs[k][k2].override[k3] = json.pairs[k][k2].override[k3] > 0.5;

                                if(!isNaN(json.pairs[k][k2].override[k3])) {
                                    json.pairs[k][k2].override[k3] = json.pairs[k][k2].override[k3] > 0.5;
                                } else if(json.pairs[k][k2].override[k3] === "true") {
                                    json.pairs[k][k2].override[k3] = true;
                                } else if(json.pairs[k][k2].override[k3] === "false") {
                                    json.pairs[k][k2].override[k3] = false;
                                }

                            } else {
                                json.pairs[k][k2].override[k3] = parseFloat(json.pairs[k][k2].override[k3]);
                            }
                        }
                    }
                }
            }
        }
    }

    fs.writeFileSync('config.js', JSON.stringify(json, null, "\t"), 'utf-8', function(err) {
    	if (err) throw err;
    	console.log('Done!')
    });

    res.send("{}");
});


app.use(express.static('public'));

    var json = fs.readFileSync('config.js', {});
    var decoder = new StringDecoder('utf8');
    json = decoder.write(json);
    json = JSON.parse(json);

app.listen(json.ws.clientport, json.ws.hostname, 511, function () {
    console.log('Gunthy listening on '+json.ws.hostname+' port '+json.ws.clientport+'!');
});
