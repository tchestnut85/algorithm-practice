// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	// regex to split the string on non-word characters and spaces
	const regex = /[\W_]/g;
	const capRegex = /([a-z])([A-Z])/g;

	// use capRegex to replace uppercase letters that don't have spaces
	const temp = str.replace(capRegex, '$1 $2');

	// ma through temp and use regex to replace spaces and other chars
	const newStr = temp
		.split(regex)
		.map(word => word.toLowerCase())
		.join('-');

	console.log('newStr:', newStr);
	return newStr;
}

// TESTS
spinalCase('This Is Spinal Tap'); // should return the string this-is-spinal-tap
spinalCase('thisIsSpinalTap'); // should return the string this-is-spinal-tap
spinalCase('The_Andy_Griffith_Show'); // should return the string the-andy-griffith-show
spinalCase('AllThe-small Things'); // should return the string all-the-small-things
