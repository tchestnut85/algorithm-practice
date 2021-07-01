// Sum All Numbers in a RangePassed
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
	// input array of 2 numbers
	// output - number - the summed value from the lower number to the larger number
	let total = 0;

	// starting at the lower number, while i is <= to the larger number
	// add the number to total
	let i = Math.min(...arr);
	while (i <= Math.max(...arr)) {
		total += i;
		i++;
	}
	console.log(total);
	return total;
}

// Tests
sumAll([1, 4]); // should return 10
sumAll([5, 10]); // should return 45.
sumAll([10, 5]); // should return 45.
