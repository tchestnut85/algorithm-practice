function pairElement(str) {
	// make an object with the matching letters for each letter
	const pairs = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C',
	};

	// map through the string and make an array with its corresponding letter
	const mainArr = [...str].map(item => makeArr(item, pairs));

	return mainArr;
}

// helper function to make an array for each character
const makeArr = (char, obj) => [char, obj[char]];

pairElement('GCG');

module.exports = pairElement;
