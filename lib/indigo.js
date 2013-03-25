var request = require('request'),
	util = require('utile');

function IndigoClient (config) {
	var self = this;
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

}

IndigoClient.prototype.setDeviceValue = function(id, key, value, done){
	var qs = {};
	qs[key]=value;
	_send(this, id, qs, done);
};

function _send(client, id, data, done){

	data = util.mixin(data, { '_method':'put'});

	var options = {
		'uri': client.host+'/devices/'+encodeURIComponent(id),
		'qs': data,
		'auth': {
			'username': client.user,
			'password': client.pass,
			'sendImmediately': false
		}
	};

	request.get(options, done);

}

exports = module.exports = IndigoClient;