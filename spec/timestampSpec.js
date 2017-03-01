var timestamp = require('../app/api/timestamp.js');

describe('timestamp', function () {
	it('returns an object', function() {
		var result = timestamp();
		expect(typeof(result)).toEqual('object');
	});

	it('given no agrument returns an object with keys unix and natural with null values', function (done) {
		timestamp().then(function(data) {
			expect(data).toEqual({unix: null, natural: null});
			done();
		});
	})

	it('given "1484006400" returns an object with "unix" value of "1484006400" and a natural value of "January 10, 2017"', function (done) {
		timestamp(1484006400).then(function(data) {
			expect(data).toEqual({unix: 1484006400, natural: 'January 10, 2017'});
			done();
		});
	});


	it('given "1484092799" returns an object with "unix" value of "1484092799" and a natural value of "January 10, 2017"', function (done) {
		timestamp(1484092799).then(function(data) {
			expect(data).toEqual({unix: 1484092799, natural: 'January 10, 2017'});
			done();
		});
	});

	it('given "January 10, 2017" returns an object with "unix" value of "1484006400" and a "natural" value of "January 10, 2017"', function (done) {
		timestamp('January 10, 2017').then(function(data) {
			expect(data).toEqual({unix: 1484006400, natural: 'January 10, 2017'});
			done();
		});
	});
});
