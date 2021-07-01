function factorialize(num) {
	let factorial = 1;

	let i = 1;
	while (i <= num) {
		factorial *= i;
		i++;
	}

	console.log('Factorial:', factorial);
	return factorial;
}

factorialize(5);
