'use strict';

const _ = require('lodash');
const request = require('request');

function IndigoClient (config) {
	this.config = _.extend({ port:80 }, config);

  if(!this.config.host) throw new Error('host not specified');
  if(typeof(this.config.host) != 'string') throw new Error('host is not a string');

  if(!this.config.port) throw new Error('port not specified');
  if(typeof(this.config.port) != 'number') throw new Error('port is not a number');
  if(this.config.port < 0 || this.config.port > 65535) throw new Error('port is out of range');

  if(!this.config.user) throw new Error('user not specified');
  if(typeof(this.config.user) != 'string') throw new Error('user is not a string');

  if(!this.config.pass) throw new Error('pass not specified');
  if(typeof(this.config.pass) != 'string') throw new Error('pass is not a string');
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

	let options = {
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

module.exports = IndigoClient;
