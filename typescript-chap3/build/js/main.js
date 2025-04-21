"use strict";
let stringArr = ["apple", "banana", "cherry"];
let numberArr = [1, 2, 3, 4, 5];
let booleanArr = [true, false, true, false];
let mixedArr = ["apple", 1, true, "banana", 2, false];
// any type of array 
stringArr[0] = 'orange';
stringArr.push('grape');
// stringArr[0] = 42; not allowed, as stringArr is of type string[]
let test = [];
let bands = [];
bands.push("Nirvana");
let mytuple = ["apple", 1, true];
mixedArr = mytuple; // This is allowed because mixedArr can hold any type of value
// mytuple = mixedArr; // This is not allowed because mytuple has a specific type of values
// mytuple[3] = "banana"; // This is allowed because mytuple is a tuple and can hold any type of value but array can access only 3 values 
let myObj;
myObj = stringArr; // This is allowed because stringArr is an object
myObj = []; // This is allowed because [] is an object
let ObjOne = {
    name: "John",
    age: 30,
    isStudent: false,
};
console.log(ObjOne);
console.log(ObjOne.name); // Output: John
console.log(ObjOne.age); // Output: 30  
console.log(ObjOne.isStudent); // Output: false
