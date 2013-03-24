var indigo = require('./lib/indigo.js'),
	prompt = require('prompt');

prompt.start();

var prompt_options = [
	'host',
	'user',
	'pass',
	'device_id',
	{
		'name':'key',
		'default':'isOn'
	},
	{
		'name':'value',
		'default':1
	}
];

prompt.get(prompt_options, function (err, result) {
	var indigoClient = new indigo({host:result.host, user:result.user, pass:result.pass});

	indigoClient.setDeviceValue( result.device_id, result.key, result.value, function(err, res, body){
		if(err) console.log(err);
		if(body) console.log(body);
	});
});