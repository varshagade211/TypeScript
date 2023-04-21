"use strict";
function avgVal(arr) {
    let sum = 0;
    if (!(arr.length))
        return 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(avgVal([5, 10]));
console.log(avgVal([3, 7, 2, 1, 2]));
console.log(avgVal([]));
