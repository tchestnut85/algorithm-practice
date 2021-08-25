const fearNotLetter = require('../missingLetter');

describe('fearNotLetter', () => {
	test('returns the missing letter from the sequence', () => {
		expect(fearNotLetter('abce')).toEqual('d');
		expect(fearNotLetter('stvwx')).toEqual('u');
		expect(fearNotLetter('abcdefghijklmnopqrstuvwxyz')).toEqual(undefined);
	});
});
