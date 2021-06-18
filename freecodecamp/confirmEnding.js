// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
	// find the index of the
	const num = target.length;

	// Solution using if/else statement
	// if (str.slice(-num) === target) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// Solution using ternary operator
	console.log('confirmEnding:', str.substr(-num) === target ? true : false);
	return str.slice(-num) === target ? true : false;
}

confirmEnding('Bastian', 'n'); // true
confirmEnding('Congratulation', 'on'); // true
confirmEnding('He has to give me a new name', 'name'); // true
confirmEnding(
	'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
	'mountain'
); // false
