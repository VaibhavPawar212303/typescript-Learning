let stringArr = ["apple", "banana", "cherry"];
let numberArr = [1, 2, 3, 4, 5];
let booleanArr = [true, false, true, false];
let mixedArr = ["apple", 1, true, "banana", 2, false];

// any type of array 

stringArr[0] = 'orange';
stringArr.push('grape');
// stringArr[0] = 42; not allowed, as stringArr is of type string[]

let test = [];
let bands:string[] = [];
bands.push("Nirvana");

let mytuple: [string, number, boolean] = ["apple", 1, true];


mixedArr = mytuple; // This is allowed because mixedArr can hold any type of value
// mytuple = mixedArr; // This is not allowed because mytuple has a specific type of values
// mytuple[3] = "banana"; // This is allowed because mytuple is a tuple and can hold any type of value but array can access only 3 values 

let myObj:object;
myObj = stringArr; // This is allowed because stringArr is an object
myObj = []; // This is allowed because [] is an object

// console.log(typeof myObj); // Output: object

type myObj ={
    name:string,
    age:number,
    isStudent:boolean,
}

let ObjOne:myObj = {
    name: "John",
    age: 30,
    isStudent: false,
}

console.log(ObjOne);
console.log(ObjOne.name); // Output: John
console.log(ObjOne.age); // Output: 30  
console.log(ObjOne.isStudent); // Output: false

