// print an 8 X 8 chessboard using X and space:
// X X X X
//  X X X X
// X X X X
//  X X X X
// X X X X
//  X X X X
// X X X X
//  X X X X

function makeBoard(num) {
	let count = 0;
	let rowNum = 1;

	// make a row num times
	while (count < num) {
		const row = makeRow(num, rowNum);
		console.log(row);
		count++;
		rowNum++;
	}
}

function makeRow(width, rowNum) {
	let rowStr = '';
	let count = 0;

	const isEven = num => num % 2 === 0;

	while (count < width) {
		if (!isEven(rowNum)) {
			isEven(count) ? (rowStr += 'X') : (rowStr += ' ');
		} else {
			isEven(count) ? (rowStr += ' ') : (rowStr += 'X');
		}
		count++;
	}

	return rowStr;
}

makeBoard(8);
