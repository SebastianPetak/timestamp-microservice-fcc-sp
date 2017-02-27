module.exports = function (dateParam) {
	return new Promise(function(resolve) {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var dateObj;
		var resultDates;
		var unixRe = new RegExp('^-?[0-9]+$', 'gm');

		// if parameter was only digits || '-' and digits,
		// convert seconds (unix time) to milliseconds
		if (unixRe.test(dateParam)) {
			dateObj = new Date(Math.floor(dateParam * 1000));
		} else {
			dateObj = new Date(dateParam);
		}

		// if d instance of Date is an Invalid Date, return null values,
		// else return values from dateObj, converting milliseconds to seconds (unix time)
		if (dateObj == 'Invalid Date') {
			resultDates = {
				unix: null,
				natural: null
			};
		} else {
			resultDates = {
				unix: Math.floor(dateObj.getTime() / 1000),
				natural: months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear()
			};
		}
		resolve(resultDates);
	});
};
