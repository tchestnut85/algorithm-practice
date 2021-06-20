// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
	// input 2 arrays and an index
	// make a new array - copy each element of arr1 into arr2 in order,
	// starting at index n in arr2

	// make a new array starting as a copy of arr2
	const arrCopy = [...arr2];

	// split up arrCopy into 2 arrays at index n
	const temp1 = arrCopy.slice(0, n);
	const temp2 = arrCopy.slice(n);

	// use spread operator to join the temp arrays and arr1 together
	const finalArr = [...temp1, ...arr1, ...temp2];
	console.log('finalArr:', finalArr);

	// output - return the new array
	return finalArr;
}

// Tests
frankenSplice([1, 2, 3], [4, 5], 1); // [4, 1, 2, 3, 5]
frankenSplice([1, 2], ['a', 'b'], 1); // ["a", 1, 2, "b"].
frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2); // ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
