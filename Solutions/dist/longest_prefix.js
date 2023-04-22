"use strict";
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let index = 0;
        let word = '';
        while ((prefix[index] && strs[i][index]) && prefix[index] === strs[i][index]) {
            word += strs[i][index];
            index++;
        }
        prefix = word;
    }
    return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
