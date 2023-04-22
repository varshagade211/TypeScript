// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// convert bellow javascript solution into typescript
// var longestCommonPrefix = function(strs) {

//     let prefix = strs[0]
//     for(let i = 1; i < strs.length; i++){

// 	   let index = 0;
// 	   let word = ''
// 	   while((prefix[index] && strs[i][index])&& prefix[index] === strs[i][index]){

//         word += strs[i][index]
//         index++
// 	  }
//          prefix = word;
//     }
//     return  prefix

// }

/*------------------------------------------write code here-----------------------------------------------*/
var longestCommonPrefix = function(strs:string[]):string {

    let prefix = strs[0]
    for(let i = 1; i < strs.length; i++){

	   let index:number = 0;
	   let word:string = ''
	   while((prefix[index] && strs[i][index])&& prefix[index] === strs[i][index]){

        word += strs[i][index]
        index++
	  }
         prefix = word;
    }
    return  prefix

}






// -----------------------------------------Uncomment testcases-------------------------------------------------------

console.log(longestCommonPrefix(["flower","flow","flight"])) //"fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) //""
