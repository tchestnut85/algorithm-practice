// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
	// input - an array of numbers
	// output - string of the min and max values summed up by adding 4 of the given numbers

	// track a min and max values
	let min = 0;
	let max = 0;

	let i = 0;
	while (i < arr.length) {
		// filter out the number with the index that is not equal to the current i, and sum it up using reduce
		let temp = arr
			.filter((number, index) => index !== i)
			.reduce((a, b) => a + b);

		switch (i) {
			case 0:
				min = temp;
				max = temp;
				break;
			default:
				temp <= min ? (min = temp) : (min = min);
				temp >= max ? (max = temp) : (max = max);
				break;
		}
		i++;
	}

	console.log(`${min} ${max}`);
	return `${min} ${max}`;
}
