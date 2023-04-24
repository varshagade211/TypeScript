"use strict";
let course = "TypeScript";
console.log("course", course);
let day = 3;
console.log("day", day);
let isPublic = true;
console.log("isPublic", isPublic);
let nums = [1, 2, 3, 4];
console.log("nums", nums);
let strs = ["a", "b", "c", "d"];
console.log("strs", strs);
let set = new Set();
set.add(1);
console.log(set);
let obj = { name: "max" };
console.log(obj);
let arr = [1, 2, "a", [], {}, true];
console.log("mixArr", arr);
let tup = [1, "Tom"];
console.log("tuple", tup);
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
console.log("Enum Size", Size);
function print(name) {
    return `Hello ${name}`;
}
console.log(print("Max"));
class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    myCatData() {
        return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}`;
    }
}
let c1 = new Cat("Fluffy", 2, "black & white");
console.log(c1.myCatData());
