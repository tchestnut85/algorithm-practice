const sumPrimes = require('../sumPrimes');

describe('sumPrimes', () => {
	describe('sums all the prime numbers less than or equal to num', () => {
		test('sumPrimes(10) should return 17', () => {
			expect(sumPrimes(10)).toEqual(17);
		});
		test('sumPrimes(50) should return 328', () => {
			expect(sumPrimes(50)).toEqual(328);
		});
		test('sumPrimes(977) should return 73156', () => {
			expect(sumPrimes(977)).toEqual(73156);
		});
	});
});
