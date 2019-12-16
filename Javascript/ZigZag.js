
// A 'zig-zag' array is a square arrangement of the first  N2  integers, where the numbers increase sequentially as you zig-zag along the array's anti-diagonals.

// For example, for the input 5, the following result should be produced:

//  0  1  5  6 14
//  2  4  7 13 15
//  3  8 12 16 21
//  9 11 17 20 22
// 10 18 19 23 24
// Write a function that takes the size of the zig-zag matrix, and 
// returns the corresponding matrix as two-dimensional array.

// Logic Behind ZigZag Can Be found in the ZigZagLogicGraph.png

function zigZagMatrix(n){
    var result = new Array(n)
    let target = n*n
    let num = 0

    for(let i = 0; i< result.length; i++){
        result[i] = new Array(n)
    }
    var r = 0 //inital row
    var c = 0 //inital column
    let k = 0
  //loop through the number
    while(k < target && k >= 0){
     result[r][c] = k // put the number into matrix

    //check if going up (x+y % 2)
    // if going up apply the going up formula (x+1)(y-1)
        if((r + c) % 2 == 0) {

            if(c == n-1){
            r++
            } else if(r == 0) {
            c++
            } 
        else {
         //going up formula here
         r--; // this is y "(y-1)""
         c++ // this is 
        }
        }

    // going down
        else{
            if(r == n-1){
            c++;
            }
            else if(c == 0){
            r++
            }
            else{
                r++;
                c--;
            }
        }
    k++
    }
     // after settting the value for the first loop, we go back and check if we're going up or down,
  // and apply the logic again until the end. 

    printMaxtrix(result)
    }

    function printMaxtrix(arr){
    arr.forEach(e => {
        console.log(e)
    })
    }


    zigZagMatrix(5)