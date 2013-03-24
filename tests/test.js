var indigo = require('../lib/indigo.js'),
	prompt = require('prompt'),
	assert = require('chai').assert;

describe('IndigoClient', function() {
	
	var indigoClient = new indigo({
	});

	describe('#setDeviceValue()', function() {
		it('should return response', function() {
			indigoClient.setDeviceValue( 'Living%20Room%20Switch', 'isOn', 1, function(err, data){
				assert.isNull(err, 'err is not null');
				assert.isNotNull(data, 'data is null');
			});
		});
	});

});