// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

function mutation(arr) {
	// make a char map for each item in the array
	const charMaps = [];
	for (const string of arr) {
		charMaps.push(makeCharMap(string));
	}
	const [str1, str2] = charMaps;

	// loop through the second charMap and check if all its characters exist (are true) in the first charMap
	for (const char in str2) {
		if (!str1[char]) {
			console.log(`mutation(${arr}) is ${false}`);
			return false;
		}
	}
	console.log(`mutation(${arr}) is ${true}`);
	return true;
}

// helper function to make a charmap setting each char: true
function makeCharMap(string) {
	const charMap = {};
	for (const char of string.toLowerCase()) {
		charMap[char] = true;
	}
	return charMap;
}

// Tests
mutation(['hello', 'hey']); // should return false
mutation(['Mary', 'Aarmy']); // should return true.
mutation(['floor', 'for']); // should return true.
