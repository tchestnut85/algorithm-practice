function myReplace(str, before, after) {
	// check the before word's first letter casecase of the before word and
	const correctCaseWord = checkCase(before, after);

	// split the str into an array
	const words = str.split(' ');

	// find the before word and replace with the after word
	const newString = replacer(words, before, correctCaseWord).join(' ');

	return newString;
}

function checkCase(before, after) {
	return before[0] === before[0].toUpperCase()
		? after[0].toUpperCase() + after.slice(1)
		: after[0].toLowerCase() + after.slice(1);
}

// function to replace the word in the array
function replacer(arr, target, replacement) {
	const arrCopy = [...arr];
	const index = arrCopy.indexOf(target);
	arrCopy[index] = replacement;
	return arrCopy;
}

module.exports = myReplace;
