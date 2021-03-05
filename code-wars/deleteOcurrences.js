// My solution for 'Enough is enough!' kata on CodeWars. 
// Problem can be found at: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
    // given an array list and a number n, create a new list that contains
    // each number of the list at most n times without reordering
    console.log(arr, n);

    // dictionary to track numbers
    const tracker = {};
    const list = [];

    // loop through the array to make a dictionary for the numbers and count their ocurrences
    for (const num of arr) {
        // if tracker with a key of num doesn't exist, create that key and set the value to 1
        if (!tracker[num]) {
            tracker[num] = 1;
            // if it does exist, increment its value
        } else {
            tracker[num]++;
        }

        // if the count is less than or equal to n, push that number into a new array
        if (tracker[num] <= n) {
            list.push(num);
        }
    }

    // return the new array
    return list;
}