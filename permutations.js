// Return the number of total permutations of the provided string that don't
//  have repeated consecutive letters. Assume that all characters in the provided string are
//   each unique.

// For example, aab should return 2 because it has 6 total
//  permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba)
//   don't have the same letter (in this case a) repeating.


//==================================================================================
//First Attempt

// NOT WORKING AS EXPECTED 
//The Splice was messing it up, every splice would change the index


// function stringPermutator(str) {
//     var factorial = [1] 
//     var permutations = [];
//     for (var i = 1; i <= str.length; i++) 
//       factorial[i] = i * factorial[i - 1];
//     for (var i = 0; i < factorial[str.length]; i++) {
//         var permutation = "", temp = str, code = i;
//         for (var pos = str.length; pos > 0; pos--) {
//             var sel = code / factorial[pos - 1];
//             permutation += temp.charAt(sel);
//             code = code % factorial[pos - 1];
//             temp = temp.substring(0, sel) + temp.substring(sel + 1);
//         }
//         permutations.push(permutation);
//     }
//     return test(permutations)
//     }

// stringPermutator("aaabb");
// function test(arr){
//     let result = []
//     for(i = 0 ; i < arr.length; i++){
//         let word = arr[i];
//         result.push(word)
//         for(j = 0 ; j < word.length; j++){
//             if( word[j] === word[j+1]){
//             result.pop(word)
//             break
//             }
//         }
//     }
//     return result.length
// }
// stringPermutator("aaabb");



function stringPermutator(str) {
    var factorial = [1];
    var permutations = [];

    for (var i = 1; i <= str.length; i++) 
      factorial[i] = i * factorial[i - 1];
    for (var i = 0; i < factorial[str.length]; i++) {
        var permutation = "", temp = str, code = i;

        for (var pos = str.length; pos > 0; pos--) {
        var sel = code / factorial[pos - 1];
        permutation += temp.charAt(sel);
        code = code % factorial[pos - 1];
        temp = temp.substring(0, sel) + temp.substring(sel + 1);
        }
    permutations.push(permutation);
    }
    return test(permutations)
}

function test(arr){
    let result = []
    for(i = 0 ; i < arr.length; i++){
        let letter = arr[i];
        result.push(letter)
        for(j = 0 ; j < letter.length; j++){
            if( letter[j] === letter[j+1]){
            result.pop(letter)
            break
            }
        }
    }
    return result.length
}

stringPermutator("aaabb");
