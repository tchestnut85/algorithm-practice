const translatePigLatin = require('../pigLatin');

describe('pigLatin function should return the given word into its pig latin version', () => {
	test('paragraphs should return aragraphspay', () => {
		expect(translatePigLatin('paragraphs')).toEqual('aragraphspay');
	});

	test('rhythm should return rhythmay', () => {
		expect(translatePigLatin('rhythm')).toEqual('rhythmay');
	});

	test('algorithm should return algorithmway', () => {
		expect(translatePigLatin('algorithm')).toEqual('algorithmway');
	});

	test('glove should return oveglay', () => {
		expect(translatePigLatin('glove')).toEqual('oveglay');
	});
});
