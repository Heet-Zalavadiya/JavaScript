// Qs. Create a function using the “function” keyword that takes a String as an argument &
//  returns the number of vowels in the string

function countVowels (str){
    str = str.toLowerCase();
    let count = 0;
    for (const char of str) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    console.log(count);
}


// Qs. Create an arrow function to perform the same task.

const count = (str) => {
    str = str.toLowerCase();
    let count = 0;
    for (const char of str) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    console.log(count);
}


//for-each in javascript are higher order function / method
//which take another function parameter inside them or return function as a output


// Qs. For a given array of numbers, print the square of each value using the forEach loop.

let nums = [1,2,3,4,5];

nums.forEach((nums) => {
    console.log(nums*nums);
});

//
let num = [65,66,67];

let calcSquare = (num) =>{
    console.log(num*num);
}
num.forEach(calcSquare);


// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [97,64,32,49,99,96,86];

let toppers = marks.filter((val) => {
    return val > 90;
})

console.log(toppers);


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number:");
let arr = [];
for (let index = 1; index <= n ; index++) {
    arr[index-1] = index;
}
console.log(arr);

let sum = arr.reduce((res,curr) => {
    return res + curr;
})

console.log(sum);

let product = arr.reduce((res,curr) => {
    return res * curr;
})

console.log(product);