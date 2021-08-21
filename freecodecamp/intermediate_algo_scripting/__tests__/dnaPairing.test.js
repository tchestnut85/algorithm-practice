const pairElement = require('../dnaPairing');

describe('pairElement', () => {
	test('returns a 2D array of the correct matching elements', () => {
		const arr1 = [
			['A', 'T'],
			['T', 'A'],
			['C', 'G'],
			['G', 'C'],
			['A', 'T'],
		];
		const arr2 = [
			['C', 'G'],
			['T', 'A'],
			['C', 'G'],
			['T', 'A'],
			['A', 'T'],
		];
		expect(pairElement('ATCGA')).toEqual(arr1);
		expect(pairElement('CTCTA')).toEqual(arr2);
	});
});
