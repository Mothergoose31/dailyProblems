// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"


function longestPrefix(strs) {
    if(strs.length == 0) return "";
    let s = strs[0];
    res = "";
    for(let i = 0;i<s.length;i++){
        let c = s[i];
        for(let j = 1;j<strs.length;j++){
            if(strs[j][i] != c){
                return res; 
            }
        }
        res = res+c;
    }
    return res;
}
longestPrefix(["hello","hello","hellohello"])