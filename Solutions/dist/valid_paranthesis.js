"use strict";
var isValid = function (s) {
    let pair = { "(": ")", "{": "}", "[": "]" };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in pair) {
            stack.push(s[i]);
        }
        else {
            let pop = stack.pop();
            if (pop && pair[pop] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
