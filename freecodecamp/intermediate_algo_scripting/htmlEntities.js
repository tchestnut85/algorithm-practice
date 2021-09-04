function convertHTML(str) {
	const charsObj = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		"'": '&apos;',
		'"': '&quot;',
	};

	const updatedStr = [...str].map(char => replacer(char, charsObj)).join('');
	return updatedStr;
}

function replacer(letter, obj) {
	return obj.hasOwnProperty(letter) ? obj[letter] : letter;
}

module.exports = convertHTML;
