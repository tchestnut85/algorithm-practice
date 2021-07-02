// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(str) {
	//Input - a string that represents a time in 12hour format (ex: 07:05:45PM)
	// output - return the time string in 24hr clock format (ex: 19:05:45)

	// check if the string is set to AM or PM - slice it off since it's not needed for the returned result
	const isAmOrPm = str.slice(str.length - 2);
	const hour = str.split(':')[0];
	const hoursRemoved = str.slice(2, str.length - 2);
	let result = '';

	// if AM - return string as is, if PM - split and convert the hours as needed
	switch (isAmOrPm) {
		// in case of AM
		case 'AM':
			hour === '12'
				? (result = `00${hoursRemoved}`)
				: (result = str.slice(0, str.length - 2));
			break;
		case 'PM':
			hour === '12'
				? (result = `12${hoursRemoved}`)
				: (result = `${parseInt(hour) + 12}${hoursRemoved}`);
			break;
	}

	// return the 24hr formarted string
	console.log('result:', result);
	return result;
}

timeConversion('07:05:45AM'); // result: 07:05:45
timeConversion('09:05:45PM'); // result: 21:05:45
timeConversion('12:35:10PM'); // result: 12:35:10
timeConversion('12:51:39AM'); // result: 00:51:39
