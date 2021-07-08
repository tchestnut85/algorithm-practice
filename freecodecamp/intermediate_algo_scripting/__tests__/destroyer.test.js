const destroyer = require('../destroyer');

describe('destroyer function should remove all elements from the initial array that are of the same value as the remaining arguments.', () => {
	test('destroyer should return an array.', () => {
		expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual(expect.any(Array));
		expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toEqual(
			expect.any(Array)
		);
	});

	test('destroyer([1, 2, 3, 1, 2, 3], 2, 3)  should return [1, 1]', () => {
		expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
	});

	test('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]', () => {
		expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
	});

	test("destroyer(['tree', 'hamburger', 53], 'tree', 53) should return ['hamburger']", () => {
		expect(destroyer(['tree', 'hamburger', 53], 'tree', 53)).toEqual([
			'hamburger',
		]);
	});
});
