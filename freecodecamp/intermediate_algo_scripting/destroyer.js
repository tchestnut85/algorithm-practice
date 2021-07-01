// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
	// use the arguments object to save the remaining arguments in an array
	const items = [...arguments].slice(1);

	// remove the remaining arguments (items array) from the given arr using filter method
	const newArr = arr.filter(arrItem => !items.includes(arrItem));
	console.log('newArr:', newArr);

	return newArr;
}

// Tests
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1]
destroyer(['tree', 'hamburger', 53], 'tree', 53); //  should return ["hamburger"]
