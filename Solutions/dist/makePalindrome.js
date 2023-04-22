"use strict";
function makePalindromeSolution(num) {
    let x;
    if (typeof num === 'string') {
        x = num;
    }
    else {
        x = num.toString();
    }
    const arr = x.split('');
    const reversedArr = arr.slice();
    reversedArr.reverse();
    const paliArr = arr.concat(reversedArr);
    if (typeof num === 'string') {
        return paliArr.join('');
    }
    else {
        return +paliArr.join('');
    }
}
console.log(makePalindromeSolution(12345));
console.log(makePalindromeSolution('12345'));
