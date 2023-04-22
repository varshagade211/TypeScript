// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// convert bellow javascript solution into typescript

// var isValid = function(s) {
//     let pair ={"(":")", "{":"}", "[":"]"}
//     let stack = []
//     for(let i=0; i< s.length; i++){
//         if(s[i] in pair){
//             stack.push(s[i])
//         }else{
//             let pop = stack.pop()
//             if(pair[pop] !== s[i]){
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// };

/*------------------------------------------write code here-----------------------------------------------*/

var isValid = function(s:string):boolean {
    let pair:{[value:string]: string}={"(":")", "{":"}", "[":"]"}

    let stack :string[] = []

    for(let i=0; i< s.length; i++){
        if(s[i] in pair){
            stack.push(s[i])
        }else{
            let pop = stack.pop()
            if(pop && pair[pop] !== s[i]){
                return false
            }
        }
    }
    return stack.length === 0
};




// -----------------------------------------Uncomment testcases-------------------------------------------------------

console.log(isValid("()")) //true
 console.log(isValid("()[]{}")) //true
console.log(isValid("(]")) //false
