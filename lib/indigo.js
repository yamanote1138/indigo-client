var request = require('request'),
	util = require('utile');

function IndigoClient(config) {
	config = util.mixin(
		{
			host:'',
			port:80,
			user:'',
			pass:''
		},
		config
	);

	this.host = config.host;
	this.port = config.port;
	this.user = config.user;
	this.pass = config.pass;

};

IndigoClient.prototype = {
	
	setDeviceValue: function(id, key, value, done){
		var qs = {
			id: id,
			key: key,
			value: value
		}
		_send(this, qs, done);
	},

};

function _send(client, data, done){

	data = util.mixin(data, { '_method':'put'});

	var options = {
		'uri':client.host+'/devices/',
		'qs':data,
		'auth': {
			user: client.user,
			pass: client.pass
		}
	};

	console.log(options);

	request.get(options, function (error, response, body) {
		done(error, body);
	});
}


exports = module.exports = IndigoClient;
