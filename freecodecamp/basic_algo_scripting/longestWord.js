function findLongestWordLength(str) {
	// use sort to sort from largest to smallest
	const words = str.split(' ').sort((a, b) => b.length - a.length);
	const longestLength = words[0].length;
	console.log('longestLength:', longestLength);

	return longestLength;
}

findLongestWordLength('Google do a barrel roll');
findLongestWordLength('May the force be with you');
findLongestWordLength(
	'What if we try a super-long word such as otorhinolaryngology'
);
