function reverseString(str) {
	const reversed = str.split('').reverse().join('');

	console.log('The reversed string is:', reversed);

	return reversed;
}

reverseString('hello');
