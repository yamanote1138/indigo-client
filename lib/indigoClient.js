var request = require('request'),
	_ = require('lodash');

function IndigoClient (config) {
	var self = this;
	this.config = _.extend(
		{
			host:'',
			port:80,
			user:'',
			pass:''
		},
		config
	);
}

IndigoClient.prototype={
	setDeviceValue : function(id, key, value, done){
		var qs = {};
		qs[key]=value;
		_send(this, id, qs, done);
	}
};

function _send(client, id, data, done){

	console.log(client);

	data = _.extend(data, { '_method':'put'});

	var options = {
		'uri': 'http://'+client.config.host+'/devices/'+encodeURIComponent(id),
		'qs': data,
		'auth': {
			'username': client.config.user,
			'password': client.config.pass,
			'sendImmediately': false
		}
	};

	request.get(options, done);

}

exports = module.exports = IndigoClient;