// TODO - solve using recursion

function sumFibs(num) {
	let tempSum;
	let prevNum = 0;
	let currentNum = 1;
	const fibNums = [0, 1];

	while (prevNum + currentNum <= num) {
		// calculate the tempSum by adding currentNum and the prevNum
		tempSum = prevNum + currentNum;
		// set the prevNum to the currentNum
		prevNum = currentNum;
		// set currentNum equal to tempSum
		currentNum = tempSum;

		// if currentNum is odd, push into the array
		const isOdd = currentNum % 2 !== 0;
		isOdd && fibNums.push(currentNum);
	}

	// sum all the fib nums that are odd and less than num
	return fibNums.reduce((total, num) => total + num, 0);
}

module.exports = sumFibs;
