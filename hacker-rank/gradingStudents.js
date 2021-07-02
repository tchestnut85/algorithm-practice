// Grading Students algorithm problem
// TODO - refactor the if/else statement to be more concise

function gradingStudents(grades) {
	// input an array of numbers
	// output - an array on numbers

	const roundedGrades = [];

	// loop through the array of grades and run roundGrade function on each of them
	for (const grade of grades) {
		const roundedGrade = roundGrade(grade);
		roundedGrades.push(roundedGrade);
	}
	console.log('roundedGrades:', roundedGrades);
	return roundedGrades;
}

// roundGrade helper function
function roundGrade(grade) {
	const gradeEndsIn = parseInt(grade.toString()[1]);
	const plusTwo = grade + 2;
	const plusTwoEndsIn = parseInt(plusTwo.toString()[1]);

	// if grade is less than 38, don't round and return grade
	if (grade < 38) {
		return grade;
	} else if (plusTwo >= 100) {
		return 100;
	} else if (gradeEndsIn === 5 || gradeEndsIn === 0) {
		// if grade ends in 5 or 0, return grade
		return grade;
	} else if (plusTwoEndsIn === 5 || plusTwoEndsIn === 0) {
		// if grade + 2 ends in 0 or 5, return the number plus 2
		return plusTwo;
	} else if (plusTwoEndsIn > 5 && plusTwoEndsIn <= 6) {
		// if plusTwo end in 5-6, return the number ending in 5
		return parseInt(grade.toString()[0] + '5');
	} else if (plusTwoEndsIn > 6 && plusTwoEndsIn < 10) {
		//  if plusTwo ends in 7-9, return the original grade
		return grade;
	} else if (plusTwoEndsIn === 1) {
		// if plusTwo ends in 1, grade ended in a 9 so just add return grade+1
		return grade + 1;
	} else if (plusTwoEndsIn > 1 && plusTwoEndsIn <= 4) {
		// if plusTwo ends in 2-4, return the original grade
		return grade;
	}
}

// Tests
gradingStudents([85, 90, 73, 67, 38, 33]); // should return [85, 90, 75, 67, 40, 33]
gradingStudents([
	79, 61, 62, 63, 64, 65, 30, 61, 53, 94, 88, 89, 44, 84, 94, 21, 18,
]); // should return [80, 61, 62, 65, 65, 65, 30, 61, 55, 95, 90, 90, 45, 85, 95, 21, 20 ]
gradingStudents([98, 99, 100, 0]); // should return [100, 100, 100, 0]
