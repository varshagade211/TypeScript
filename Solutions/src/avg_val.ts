// Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in the array.
// If the array is empty, it should return null.

function avgVal (arr:number[]):number{
    let sum: number= 0;
    if(!(arr.length)) return 0;
   for(let i=0; i<arr.length; i++){
     sum += arr[i];

   }
    return sum/arr.length
  }


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // 0
