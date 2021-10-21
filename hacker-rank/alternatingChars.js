function alternatingCharacters(str) {
	const total = str.toLowerCase().split('').reduce(getCount, 0);
	return total;
}

function getCount(sum, char, i, arr) {
	return char === arr[i + 1] ? sum + 1 : sum;
}

module.exports = alternatingCharacters;