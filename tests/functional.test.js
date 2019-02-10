const IndigoClient = require('../lib/indigoClient.js');
const prompt = require('prompt');  // eslint-disable-line node/no-unpublished-require

prompt.start();

let prompt_options = [
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
	let indigoClient = new IndigoClient({host:result.host, user:result.user, pass:result.pass});

	indigoClient.setDeviceValue( result.device_id, result.key, result.value, function(err, res, body){
		if(err) throw err;
		if(body) console.log(body); // eslint-disable-line
	});
});

