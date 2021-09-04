const convertHTML = require('../htmlEntities');

describe('convertHTML ', () => {
	test('returns a string with special characters replaced by HTML entity equivalent', () => {
		expect(convertHTML('Dolce & Gabbana')).toEqual('Dolce &amp; Gabbana');
		expect(convertHTML('Stuff in "quotation marks"')).toEqual(
			'Stuff in &quot;quotation marks&quot;'
		);
		expect(convertHTML('<>')).toEqual('&lt;&gt;');
	});
});
