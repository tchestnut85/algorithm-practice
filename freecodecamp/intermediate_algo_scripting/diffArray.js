// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// function diffArray(arr1, arr2) {
// 	// input - 2 arrays
// 	// output - an array with the difference between the 2 arrays
// 	const newArr = [];

// 	// check items in arr1 and if arr2 includes each of them,
// 	// if not then push that item into newArray
// 	checkArray(arr1, arr2, newArr);

// 	// do the same for arr2
// 	checkArray(arr2, arr1, newArr);

// 	console.log(newArr);
// 	return newArr;
// }

// // checkArray helper function
// const checkArray = (arrA, arrB, resultArr) => {
// 	for (const item of arrA) {
// 		if (!arrB.includes(item)) {
// 			resultArr.push(item);
// 		}
// 	}
// };

// SOLUTION using charMap and for loops
function diffArray(arr1, arr2) {
	const newArr = [];

	const map1 = mapper(arr1);
	const map2 = mapper(arr2);

	for (const item of arr1) {
		if (!map2[item]) {
			newArr.push(item);
		}
	}
	for (const item of arr2) {
		if (!map1[item]) {
			newArr.push(item);
		}
	}
	console.log('newArr:', newArr);
	return newArr;
}

const mapper = arr => {
	const obj = {};

	for (const item of arr) {
		obj[item] = item;
	}
	return obj;
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4]
diffArray(
	['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
	['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
); // should return ['pink wool']
diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]); // should return ["piglet", 4]
