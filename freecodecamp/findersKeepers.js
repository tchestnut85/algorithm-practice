// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
	// use the find method to return the first element that satisfies func (is true)
	// else return undefined
	const foundNum = arr.find(func) || undefined;

	console.log('foundNum:', foundNum);
	return foundNum;
}

// ----------------------------------------------------------
// TESTS:
findElement([1, 3, 5, 9], function (num) {
	return num % 2 === 0;
}); // undefined
findElement([1, 2, 3, 4], num => num % 2 === 0); // 2
findElement([1, 3, 5, 8, 9, 10], function (num) {
	return num % 2 === 0;
}); // 8
