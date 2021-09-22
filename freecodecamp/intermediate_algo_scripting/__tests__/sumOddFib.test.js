const sumFibs = require('../sumOddFib');

describe('sumFibs sum all the odd fibonacci numbers up to the given number', () => {
	test('sumFibs(75025) should return 135751', () => {
		expect(sumFibs(75025)).toEqual(135721);
	});
	test('sumFibs(4) should return 5', () => {
		expect(sumFibs(4)).toEqual(5);
	});
	test('sumFibs(1000) should return 1785', () => {
		expect(sumFibs(1000)).toEqual(1785);
	});
});
