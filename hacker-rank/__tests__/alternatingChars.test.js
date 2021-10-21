const alternatingCharacters = require('../alternatingChars')

describe(alternatingCharacters, () => {
    test('returns the number of deletions needed to have a string with alternating characters', () => {
        expect(alternatingCharacters('AAAA')).toBe(3);
        expect(alternatingCharacters('ABABA')).toBe(0);
        expect(alternatingCharacters('AABABBA')).toBe(2);
        expect(alternatingCharacters('AaBAbBA')).toBe(2);
    })
})