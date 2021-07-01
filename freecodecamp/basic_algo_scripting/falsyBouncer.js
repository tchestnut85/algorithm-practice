// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
	// use the filter method to return only items from the array that are truthy
	const truth = arr.filter(item => item);

	// return the new array of truthy values
	console.log(truth);
	return truth;
}

// Tests
bouncer([7, 'ate', '', false, 9]); // should return [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, '']); // should return []
bouncer([null, NaN, 1, 2, undefined]); // should return [1, 2]
