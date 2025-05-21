//for-of loop used for string 

let str = "Java Script";
for (let i of str) { // iterator -> character
    console.log(i);
}

console.log("String length = " + str.length);


// for-in loop for objects 

let student = {
    fullname: 'Rahul Kumar',
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for (let key in student) {
    console.log("key = " + key + " value = " + student[key]);
}

//String 
let s = 'Darshan University';
let s1 = "Darshan";

//Template Literals 
let specialString = `This is a Template literal`;
console.log(typeof specialString);

//for template literal

let obj = {
    item:"pen",
    price : 10
};
let output = `The cost of ${obj.item} is ${obj.price}`;//here obj.price is converted into string 
console.log(output);
console.log("the cost of", obj.item ,"is", obj.price);// here obj.price is integer