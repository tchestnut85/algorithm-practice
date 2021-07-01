// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
	// Solution using if/else statement
	// If num is greater than or equal to string's length, return original string
	// if (num >= str.length) {
	//  return str;
	// }
	// Else, return the string truncated at the given number with "..." added
	//   return str.substr(0, num) + '...';

	// Solution using ternary operator
	return num >= str.length ? str : str.substr(0, num) + '...';
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
truncateString(
	'A-tisket a-tasket A green and yellow basket',
	'A-tisket a-tasket A green and yellow basket'.length + 2
);
truncateString('Peter Piper picked a peck of pickled peppers', 11);
truncateString('A-', 1);
