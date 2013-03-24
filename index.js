var indigo = require('./lib/indigo.js'),
	prompt = require('prompt');

prompt.start();

prompt.get(['host', 'user', 'pass'], function (err, result) {
	var indigoClient = new indigo({
		host: result.host,
		user: result.user,
		pass: result.pass
	});

	indigoClient.setDeviceValue( 'Living Room Switch', 'isOn', 0, function(err, res, body){
		if(err) console.log(err);
		if(body) console.log(body);
	});
});