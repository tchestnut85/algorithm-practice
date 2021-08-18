const myReplace = require('../searchAndReplace');

describe('searchAndReplace should return the given string with the before word replaced with the after word in the same case', () => {
	test('Replaces the before word correctly', () => {
		expect(myReplace('Let us go to the store', 'store', 'mall')).toEqual(
			'Let us go to the mall'
		);
	});

	test('Replaces the word correctly with the same case', () => {
		expect(
			myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
		).toEqual('He is Sitting on the couch');
	});
});
