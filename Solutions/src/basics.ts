// Declare variables for diffrent datatypes
// translate javascript code in typescript

// let course = "TypeScript"
let course:string = "TypeScript"
console.log("course",course) //

// let day = 3
let day:number = 3
console.log("day",day)  //

// let isPublic = true

let isPublic:boolean = true
console.log("isPublic",isPublic)//

//  let nums = [1,2,3,4]

let nums:number[] = [1,2,3,4]
console.log("nums",nums) //


// let strs = ["a","b","c","d"]

let strs:string[] = ["a","b","c","d"]
console.log("strs",strs)  //

// let set = new Set()

let set = new Set()
set.add(1)

console.log(set)


// let obj = {name:"Max"}
let obj:{[name:string]:string} = {name:"max"}
console.log(obj)
// let arr = [1,2,"a",[],{},true]

let arr:[number,number,string,object,object,boolean] = [1,2,"a",[],{},true]   // this is not recommended
console.log("mixArr",arr) //

// declare tuple for following values. Tuple means couple of types of values in an arr
// let tup = [1,"Tom"]

let tup:[number,string] = [1,"Tom"]
console.log("tuple",tup)


// declare Enum for following variables. Enum is group of constant variables

// const small = 1
// const medium = 2
// const large =3

enum Size {small=1,medium,large}   // by default enum will assign value 0 to first member and increase it by one for remaining member
console.log("Enum Size",Size)       //

// convet Javascript function is typescript

// function print(name){

//     return `Hello ${name}`
// }

function print(name:string):string{

    return `Hello ${name}`
}
console.log(print("Max"))

// Convert javascript class in typeScript

// class Cat{
//     constructor(name,age,color){
//         this.name = name
//         this.age = age
//         this.color = color
//     }

//     myCatData(){
    // return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}
//  }
// }




class Cat{
   public name:string
   public age:number
   public color:string

    constructor(name:string,age:number,color:string){
        this.name = name
        this.age = age
        this.color = color
    }

    myCatData():string{
        return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}`
}
}

let c1 = new Cat("Fluffy",2,"black & white")
console.log(c1.myCatData())
