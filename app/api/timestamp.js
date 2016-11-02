'use strict';

module.exports = function checkParam(p) {
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	var unixRe = new RegExp('^-?[0-9]+$', 'gm');
	
	// if parameter was only digits || '-' and digits,
	// convert seconds (unix time) to milliseconds
	if (unixRe.test(p)) {
		var d = new Date(Math.floor(p * 1000));
	} else {
		var d = new Date(p);
	}

	// if d instance of Date is an Invalid Date, return null values, 
	// else return values from d, converting milliseconds to seconds (unix time)
	if (d == "Invalid Date") {
		return {
			"unix": null,
			"natural": null
		}
	} else {
		return {
			"unix": Math.floor(d.getTime() / 1000),
			"natural": months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
		}
	}
}