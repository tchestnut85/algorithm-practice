const uniteUnique = require('../sortedUnion');

describe('uniteUnique', () => {
	test('returns an array of unique values', () => {
		expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([
			1, 3, 2, 5, 4,
		]);
		expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
		expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual(
			[1, 2, 3, 5, 4, 6, 7, 8]
		);
	});
});
