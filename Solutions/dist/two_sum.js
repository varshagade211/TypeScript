"use strict";
var twoSum = function (nums, target) {
    let found = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in found) {
            return true;
        }
        else {
            found[nums[i]] = i;
        }
    }
    return false;
};
console.log(twoSum([1, 7, 3, 0, 2], 5));
console.log(twoSum([1, 7, 3, 0, 2], 6));
console.log(twoSum([4, 6, 2, 3], 8));
console.log(twoSum([4, 6, 2, 3], 11));
