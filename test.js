const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const { palindrome } = require('./freecodecamp/palindrome-checker.js');
const { linearSearch, binarySearch } = require('./bootcamp/search');

const nums = [];
for (let i = 0; i < 10000; i++) {
    nums.push(Math.floor(Math.random() * 10000) + 1);
}

// const numbers = [];
// for (let i = 1; i <= 1000000; i++) {
//     // populate the array with the numbers 1 to 1,000,000
//     numbers.push(i);
// }

// suite
//     .add('palindrome-check', function () {
//         const testWord1 = 'crumbum';
//         const testWord2 = 'qwertyuiop';
//         palindrome(testWord1);
//         palindrome(testWord2);
//     })
//     .on('complete', function () {
//         // console.log(this);
//         this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds.`));
//     })
//     .run();

suite
    .add('linear search', function () {
        linearSearch(nums);
    })
    .on('complete', function () {
        // console.log(this);
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds.`));
    })
    .run();