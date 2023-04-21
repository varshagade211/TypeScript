"use strict";
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([4, 3, -1, 10]));
console.log(sumArray([6, 7, 2]));
console.log(sumArray([]));
