indigo-client [![Build Status](https://travis-ci.org/yamanote1138/indigo-client.png?branch=master)](https://travis-ci.org/yamanote1138/indigo-client)
=============

simple node client for Indigo home automation server

[![NPM](https://nodei.co/npm/indigo-client.png?compact=true)](https://nodei.co/npm/indigo-client/)

## Usage

setup, configure and connect
```javascript
var IndigoClient = require('indigo-client');

var client = new IndigoClient({
	host: 'indigo.myhomedomain.com', // include port if applicable
	user: 'admin',
	pass: 's3cr3t'
});
```

set device property to value
```javascript
client.setDeviceValue( 'Living Room Switch', 'isOn', 1, function(err, res, body){
	console.log('Living Room Switch isOn set to 1');
	// handle error and/or do stuff
});
```
