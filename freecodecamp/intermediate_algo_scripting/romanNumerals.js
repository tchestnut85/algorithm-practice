function convertToRoman(num) {
	let tracker = num;

	let romanNum = '';

	while (tracker > 0) {
		if (tracker >= 1000) {
			const count = Number(String(tracker)[0]);
			// add the numeral to romanNum count times
			let tempNumeral = applyNumeral('M', count);
			romanNum += tempNumeral;
			tracker -= 1000 * count;
		}

		if (tracker >= 900) {
			romanNum += 'CM';
			tracker -= 900;
		}

		if (tracker >= 500) {
			romanNum += 'D';
			tracker -= 500;
		}

		if (tracker >= 400) {
			romanNum += 'CD';
			tracker -= 400;
		}

		if (tracker >= 100) {
			const count = Number(String(tracker)[0]);
			let temp = applyNumeral('C', count);
			romanNum += temp;
			tracker -= 100 * count;
		}

		if (tracker >= 90) {
			romanNum += 'XC';
			tracker -= 90;
		}

		if (tracker >= 50) {
			romanNum += 'L';
			tracker -= 50;
		}

		if (tracker >= 40) {
			romanNum += 'XL';
			tracker -= 40;
		}

		if (tracker >= 10) {
			const count = Number(String(tracker)[0]);
			let temp = applyNumeral('X', count);
			romanNum += temp;
			tracker -= 10 * count;
		}

		if (tracker === 9) {
			romanNum += 'IX';
			tracker -= 9;
		}

		if (tracker >= 6 && tracker <= 8) {
			const count = tracker;
			let temp = 'V' + applyNumeral('I', count - 5);
			romanNum += temp;
			tracker -= count;
		}

		if (tracker === 5) {
			romanNum += 'V';
			tracker -= 5;
		}

		if (tracker === 4) {
			romanNum += 'IV';
			tracker -= 4;
		}

		if (tracker < 4) {
			let count = tracker;
			let temp = applyNumeral('I', tracker);
			romanNum += temp;
			tracker -= count;
		}
	}
	return romanNum;
}

function applyNumeral(numeral, times) {
	let count = times;
	let result = '';
	while (count > 0) {
		result += numeral;
		count--;
	}
	return result;
}

// convertToRoman(3999); // should return the string MMMCMXCIX
// convertToRoman(44); // should return the string XLIV
// convertToRoman(99); // should return the string XCIX
