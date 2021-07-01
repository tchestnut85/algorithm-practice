// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
	const largestNums = [];

	// loop through the array and sort each subarray largest to smallest
	// then push each largest number into the largestNums array
	for (const sub of arr) {
		const largest = sub.sort((a, b) => b - a)[0];
		largestNums.push(largest);
	}

	// return a new array with the 4 largest nums from each subarray
	console.log('largestNums:', largestNums);
	return largestNums;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1],
]);
