// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
	// use the arguments object to save the remaining arguments in an array
	const items = [...arguments].slice(1);

	// remove the remaining arguments (items array) from the given arr using filter method
	const newArr = arr.filter(arrItem => !items.includes(arrItem));
	console.log('newArr:', newArr);

	return newArr;
}

// Solution using for loops
// function destroyer(arr) {
// const restArgs = [...arguments].slice(1);

// 	const resultArr = [];

// 	for (const item of arr) {
// 		if (!restArgs.includes(item)) {
// 			resultArr.push(item);
// 		}
// 	}

// 	console.log(resultArr);
// 	return resultArr;
// }

module.exports = destroyer;
