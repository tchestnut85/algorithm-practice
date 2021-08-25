function fearNotLetter(str) {
	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
	const alphaArr = [...ALPHABET];
	const strArr = [...str];

	// find the position of each of the letters
	const positions = strArr.map(letter => alphaArr.indexOf(letter));

	// get the substring from the alphabet str using the start and end positions
	const fullStrArr = getSubStrArr(ALPHABET, positions);

	// filter out the missing letter from the new substring using the given str
	const missingLetter = fullStrArr.filter(
		letter => !strArr.includes(letter)
	)[0];
	return missingLetter;
}

// get the full substring without the missing letter
function getSubStrArr(alphaStr, arr) {
	const start = arr[0];
	const end = arr[arr.length - 1];
	return alphaStr.substring(start, end + 1).split('');
}

module.exports = fearNotLetter;
