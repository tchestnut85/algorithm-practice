function triangle(count) {
	let str = '';

	let i = 0;
	while (i <= count) {
		console.log(str);
		str += '#';
		i++;
	}
}

triangle(7);
