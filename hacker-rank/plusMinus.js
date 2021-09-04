function plusMinus(arr) {
	const len = arr.length;
	const counts = {
		positive: 0,
		negative: 0,
		zero: 0,
	};

	for (const num of arr) {
		if (num > 0) {
			counts.positive += 1;
		} else if (num < 0) {
			counts.negative += 1;
		} else if (num === 0) {
			counts.zero += 1;
		}
	}

	const ratioArr = getRatio(counts, len);
	print(ratioArr);
}

function getRatio(countsObj, len) {
	const ratios = [];

	for (const prop in countsObj) {
		ratios.push((countsObj[prop] / len).toFixed(len));
	}
	return ratios;
}

function print(arr) {
	return arr.map(item => console.log(item));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);

module.exports = plusMinus;
