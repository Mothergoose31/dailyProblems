// Given a string s consists of upper/lower-case alphabets and empty space 
// characters ' ', return the length of last word (last word means the last
//      appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

function LastWordLength(str:string):any{
    var strArray:Array<string>;
// splits  string into array of substrings
    strArray = str.split(' ');
    console.log(strArray)
//find the last index in array and return its length
    return strArray[strArray.length -1].length
}
LastWordLength("the lazy dog jumped over the fence")
