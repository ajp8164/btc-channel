var channel = require('../');
var btcLib = require('btc-lib');


var providerKey = new btcLib.PrivateKey(btcLib.Networks.testnet);

console.log('provider key: ' + providerKey.toString());
