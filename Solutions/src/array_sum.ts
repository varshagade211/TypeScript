// Write a function sumArray(arr) that accepts an array as an arg.
// The function should return the total sum of all values of the array.

// console.log(sumArray([4, 3, -1, 10])); // 16
// console.log(sumArray([6, 7, 2])); // 15
// console.log(sumArray([])); // 0


function sumArray(arr:number[]):number{
   let sum:number=0
   for(let i=0; i<arr.length; i++){
    sum+=arr[i]
   }
   return sum
}


console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); //0
