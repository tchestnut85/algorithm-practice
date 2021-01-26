// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

const plusOne = function (digits) {
    let newNum = '';

    for (const num of digits) {
        newNum += num;
    }

    let numPlusOne = Number(newNum) + 1;

    let stringNum = numPlusOne.toString();

    for (let i = 0; i < stringNum.length; i++) {
        const num = stringNum[i];
        const digit = Number(num);

        digits[i] = digit;
    }

    console.log('digits:', digits);
    return digits;
};