const spinalCase = require('../spinalCase');

describe('spinalCase function should return all words lowercase joined by dashes (just-like-this).', () => {
	test('"This Is Spinal Tap" should return the string "this-is-spinal-tap"', () => {
		expect(spinalCase('This Is Spinal Tap')).toEqual('this-is-spinal-tap');
	});

	test('"thisIsSpinalTap" should return the string "this-is-spinal-tap"', () => {
		expect(spinalCase('thisIsSpinalTap')).toEqual('this-is-spinal-tap');
	});

	test('"The_Andy_Griffith_Show" should return the string "the-andy-griffith-show"', () => {
		expect(spinalCase('The_Andy_Griffith_Show')).toEqual(
			'the-andy-griffith-show'
		);
	});

	test('"AllThe-small Things" should return the string "all-the-small-things"', () => {
		expect(spinalCase('AllThe-small Things')).toEqual(
			'all-the-small-things'
		);
	});
});
