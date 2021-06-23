// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
	// input - array of numbers
	// output - return the number of candles to blow out

	// determine the largest number
	const largest = candles.sort((a, b) => b - a);

	// solution using for of loop
	// let total = 0;
	// let i = 0;
	// for(const candle of candles) {
	//     if (candle === largest[0]) {
	//         total++;
	//     }
	// }
	// return total;

	// solution using filter method
	// count the occurence of largest
	const num = largest.filter(num => num === largest[0]).length;
	console.log('num:', num);
	return num;
}

birthdayCakeCandles([3, 3, 1, 2]); // returns 2
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]); // returns 5
