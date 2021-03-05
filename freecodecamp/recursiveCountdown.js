// Only change code below this line
// function countdown(n){
//   // if n is less than one, return an empty array
//   if (n < 1) {
//     return [];
//   } else {
//   // else, use recursion passing n - 1 as the argument to countdown
//     const countArr = countdown(n - 1);
//   // push n into the beginning of an array and return the array
//     countArr.unshift(n);
//     return countArr;
//   }
// }

// solution using ternary and spread operators
function countdown(n) {
  console.log(n)
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}
// Only change code above this line
console.log(countdown(10));