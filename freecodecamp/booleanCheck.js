// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
	// check if bool data type is a boolean primitive (true of false)
	// if so, return true, else false
	return typeof bool === 'boolean' ? true : false;
}

booWho(null); // false
booWho(true); // true
booWho(false); // true
booWho(0); // false
booWho([].slice); // false
booWho('true'); // false
