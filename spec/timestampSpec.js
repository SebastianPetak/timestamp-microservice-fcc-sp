var timestamp = require('../app/api/timestamp.js');

describe('timestamp', function () {
	// Create date object based off of test value to ensure both our expected
	// and actual timestamps are in the same timezone
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var dateTestObj;
	var	createDateTestObj = function(dateInput, type) {
		let date;
		if (type == 'unix') {
			date = new Date(Math.floor(dateInput * 1000));
		} else {
			date = new Date(dateInput);
		}

		if (date == 'Invalid Date') {
			dateTestObj = {
				unix: null,
				natural: null
			};
		} else {
			dateTestObj = {
				unix: Math.floor(date.getTime() / 1000),
				natural: months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
			};
		}
		return dateTestObj;
	};

	it('returns an object', function() {
		var result = timestamp();
		expect(typeof(result)).toEqual('object');
	});

	it('given no agrument returns an object with keys unix and natural with null values', function (done) {
		var expectation = createDateTestObj();
		timestamp().then(function(data) {
			expect(data).toEqual(expectation);
			done();
		});
	})

	it('given "1484006400" returns an object with "unix" value of "1484006400" and a natural value of "January 10, 2017"', function (done) {
		var expectation = createDateTestObj(1484006400, 'unix');
		timestamp(1484006400).then(function(data) {
			expect(data).toEqual(expectation);
			done();
		});
	});


	it('given "1484092799" returns an object with "unix" value of "1484092799" and a natural value of "January 10, 2017"', function (done) {
		timestamp(1484092799).then(function(data) {
			var expectation = createDateTestObj(1484092799, 'unix');
			expect(data).toEqual(expectation);
			done();
		});
	});

	it('given "January 10, 2017" returns an object with "unix" value of "1484006400" and a "natural" value of "January 10, 2017"', function (done) {
		var expectation = createDateTestObj('January 10, 2017', 'natural');
		timestamp('January 10, 2017').then(function(data) {
			expect(data).toEqual(expectation);
			done();
		});
	});
});
