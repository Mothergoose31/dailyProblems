

// Project Euler: Problem 13: Large sum
// Work out the first ten digits of the sum of the 
// following
//  one-hundred 50-digit numbers.


function largeSum(arr) {
    // Good luck!
    var arr2 = arr.toString().split('').splice(0,10).join('')
    return arr2
    console.log("hello")
}


  // only change code above this line


const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);