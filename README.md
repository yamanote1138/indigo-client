indigo-client
=============

simple node client for Indigo home automation server

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