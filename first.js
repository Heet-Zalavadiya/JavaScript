console.log("Hello World");
console.log("This is my First JavaScript code");
// fullName = 'Heet Zalavadiya';
// age = 24;
// radius = 14;
// price = 99.99;
// x = null;
// y = undefined;
// isFollow = false;
// var fullName = "heet"; do not use now use let and const for good practice
let fullName = "Heet";
let age = 24;
let totalPrice = 1000;
let a;
const b = 20;//should be inislized

// var ageM = 24;
// var ageM = 25;
// var ageM = 30; output 30 update or redeclare globle scope

const PI = 3.14;

// let age = 30; cannot be redeclared 
age = 30; // can be updated for let 


fullName = 25;

console.log(b);
console.log(a);

{
    let a = 10;//blocked scope 
    console.log(a);
}
{
    let a = 50;
    console.log(a);
}


const student = { // if we have const obj than we can update its key if normal const than we cannot
    fullName : 'Rahul Kumar',
    age : 20,
    cgpa : 8.2,
    isPass : true
};



student["fullName"] = 'Rahul Sharma';
student["age"]++;

console.log(student.fullName);
console.log(student["age"]);