// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

function getIndexToIns(arr, num) {
	// push the given num onto the given arr, then sort new array
	const newArr = [...arr, num].sort((a, b) => a - b);

	// return the index of num
	return newArr.indexOf(num);
}

// Tests
getIndexToIns([40, 60], 50); // returns index 1
getIndexToIns([10, 20, 30, 40, 50], 35); // returns index 3
getIndexToIns([], 1); // returns 0
