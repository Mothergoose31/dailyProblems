
  // Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and 
//each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Input: [1,2,3]
// Output: [1,2,4]

function addOneToArray (Array:Array<number>){
    console.log(Array)
    console.log(Array[Array.length -1])
    console.log(Array[Array.length -2])
    // if the last number in the array is 9 , set the last number to 0 and  add +1 to the second to last 
    //number 
    if(Array[Array.length -1] === 9){
        Array[Array.length -1] = 0;
        Array[Array.length -2] ++;
    }
    //if the last number in the array is less than 9 , add  +1 to the end of the last number
    else  if(Array[Array.length -1] < 9){
        Array[Array.length -1] ++;
    }
    console.log(Array)
}
addOneToArray([1,2,3,9])