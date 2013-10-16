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

	data = _.extend(data, { '_method':'put'});

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