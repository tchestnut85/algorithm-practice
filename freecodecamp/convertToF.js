function convertToF(celsius) {
	let fahrenheit = celsius * (9 / 5) + 32;

	console.log(`${celsius}°C converts to ${fahrenheit}°F. `);
	return fahrenheit;
}

convertToF(30);
convertToF(-0);
convertToF(14);
convertToF(0);
