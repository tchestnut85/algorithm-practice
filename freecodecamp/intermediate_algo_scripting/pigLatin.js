function translatePigLatin(str) {
	// set an array of vowels
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	// track a substring to move to the end of the word, define a strEnd and track result
	const strEnd = vowels.includes(str[0]) ? 'way' : 'ay';
	let consonants = '';
	let result = '';

	// loop through the str and check if a letter is consonant or vowel
	let i = 0;
	for (const letter of str) {
		// if we hit a vowel, define the result and stop iterating
		if (vowels.includes(letter)) {
			result = [...str.slice(i), ...consonants, ...strEnd].join('');
			break;
		} else {
			// if we get a consonant, add it to consonants
			consonants += letter;
		}

		// if the str looped to the end (meaning no vowels)
		if (i === str.length - 1) {
			result = [...consonants, ...strEnd].join('');
		}
		i++;
	}
	return result;
}

module.exports = translatePigLatin;
