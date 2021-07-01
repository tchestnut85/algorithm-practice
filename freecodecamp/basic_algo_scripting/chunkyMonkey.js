// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
	// split apart the array by the given size, and push each split chunk into a new array
	const chunkArr = [];

	// track an index and tracker
	let tracker = size;
	let index = 0;

	// while tracker is <= arr.length, keep chunking the array
	while (tracker <= arr.length) {
		const itemsLeft = arr.length - tracker;

		if (itemsLeft < size && itemsLeft !== 0) {
			// if itemsLeft is less than size and not 0, do this:
			chunkArr.push(arr.slice(index, index + size));
			chunkArr.push(arr.slice(tracker));
			tracker += size;
		} else {
			chunkArr.push(arr.slice(index, index + size));
			index += size;
			tracker += size;
		}
	}
	console.log('chunkArr:', chunkArr);
	return chunkArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // should return [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
