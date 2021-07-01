function repeatStringNumTimes(str, num) {
	// Save the new string
	let newStr = '';

	// Solution using while loop
	let i = 0;

	// While i is less than num, add str to newStr
	while (i < num) {
		newStr += str;
		i++;
	}

	console.log('newStr:', newStr);
	return newStr;
}

repeatStringNumTimes('abc', 3);
repeatStringNumTimes('abc', 4);
repeatStringNumTimes('*', 8);
repeatStringNumTimes('abc', 0);
