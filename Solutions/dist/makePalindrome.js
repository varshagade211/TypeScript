/*
Given a number with n digits, return the palindrome
with 2n digits, the first n of which are the original number

The input can be either an integer or a string of digits.
Write your function such that the return always has the same data type as the input.

Bonus: Specify the return type to enforce that the return type matches the input
*/
function makePalindromeSolution(num) {
    var x;
    if (typeof num === 'string') {
        x = num;
    }
    else {
        x = num.toString();
    }
    var arr = x.split('');
    var reversedArr = arr.slice();
    reversedArr.reverse();
    var paliArr = arr.concat(reversedArr);
    if (typeof num === 'string') {
        return paliArr.join('');
    }
    else {
        return +paliArr.join('');
    }
}
console.log(makePalindromeSolution(12345));
console.log(makePalindromeSolution('12345'));
