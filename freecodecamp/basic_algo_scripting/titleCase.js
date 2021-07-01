// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
	// split the string into an array of words
	const words = str.split(' ');

	// map through the words array and uppercase the first index of each word
	// and join them together
	const newString = words
		.map(word => {
			return word[0].toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(' ');
	console.log(newString);

	return newString;
}

// Tests
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase('sHoRt AnD sToUt'); // Short And Stout
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // Here Is My Handle Here Is My Spout
