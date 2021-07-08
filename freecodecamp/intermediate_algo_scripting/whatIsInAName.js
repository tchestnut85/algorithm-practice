// Wherefore art thou
// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
	// get an array of source's properties
	const props = Object.keys(source);

	// for each object in the array, check if every prop/value in source exists in the object
	const filteredObjs = collection.filter(obj => {
		for (const key of props) {
			if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
				return false;
			}
		}
		return true;
	});

	console.log('filteredObjs:', filteredObjs);
	return filteredObjs;
}

// TESTS

whatIsInAName(
	[
		{ first: 'Romeo', last: 'Montague' },
		{ first: 'Mercutio', last: null },
		{ first: 'Tybalt', last: 'Capulet' },
	],
	{ last: 'Capulet' }
); // should return [{ first: "Tybalt", last: "Capulet" }]

whatIsInAName(
	[
		{ apple: 1, bat: 2 },
		{ apple: 1 },
		{ apple: 1, bat: 2, cookie: 2 },
		{ bat: 2 },
	],
	{ apple: 1, bat: 2 }
); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }); // should return []

whatIsInAName(
	[{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
	{ apple: 1, bat: 2 }
); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
