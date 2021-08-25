function uniteUnique(arr) {
	const arrays = [...arguments];

	// use reduce to combine the values from all the subarrays in arrays
	const allValues = arrays.reduce(
		(mainArr, subArr) => [...mainArr, ...subArr],
		[]
	);

	// use filter to return each value that is not in the current array
	const uniques = allValues.reduce(
		(arr, value) => (!arr.includes(value) ? [...arr, value] : [...arr]),
		[]
	);

	// alternative solution using Set
	// const uniques = [...new Set(allValues)];

	return uniques;
}

module.exports = uniteUnique;
