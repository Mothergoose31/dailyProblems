// Type	       Each element size in bytes
// Int8Array	        1
// Uint8Array	        1
// Uint8ClampedArray	1
// Int16Array	        2
// Uint16Array	        2
// Int32Array	        4
// Uint32Array	        4
// Float32Array	        4
// Float64Array	        8
// Basically what happens in the background is that your browser 
// will automatically give the right amount of memory space for that array. 
// It will also change as needed if you add or remove data.

// However, in the world of high performance and different element types, sometimes 
// you need to be more specific on how much memory is given to an array.

// Typed arrays are the answer to this problem. You are now able to say how much memory 
// you want to give an array. Below is a basic overview of the different types of arrays available
//  and the size in bytes for each element in that array.

// First create a buffer that is 64-bytes. Then create a Int32Array typed array with a
//  view of it called i32View






var byteSieze = 64;
var buffer = new ArrayBuffer(byteSieze);
var i32View = new Int32Array(buffer);
buffer.length;
i32View.length;
console.log(i32View);