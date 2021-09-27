function sumPrimes(num) {
	const primeNums = Array(num)
		.fill(0)
		.map((_, i) => i + 1)
		.filter(num => checkPrime(num));

	const total = primeNums.reduce((sum, num) => sum + num, 0);
	return total;
}

// function to check if a number is prime
function checkPrime(num) {
	if (num <= 1) return false;
	if (num === 2) return true;

	let i = 2;
	while (i < num) {
		if (num % i === 0) return false;
		i++;
	}
	return true;
}

module.exports = sumPrimes;
