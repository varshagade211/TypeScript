/*
Given a number with n digits, return the palindrome with 2n digits, the first n of which are the original number

You are given a solution written in JS that works when given a string input.

Refactor the function such that:
 (i) the input can be an integer or a string of digits
 (ii) the return type matches the input type

Bonus: Specify the return type to enforce that the return type matches the input.
There are many ways to do so, but you may need to do some research into multiple function signatures or the typeof operator
*/

function makePalindrome(num) {

    const arr = num.split('');
    const reversedArr = arr.slice();
    reversedArr.reverse()
    const paliArr = arr.concat(reversedArr)

    return paliArr.join('')
}

// expected output: 1234554321 (of correct return type)
console.log(makePalindrome(12345))
console.log(makePalindrome('12345'))
