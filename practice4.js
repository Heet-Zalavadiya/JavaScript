// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let marks = [85,97,44,37,76,60];
let sum = 0;

for (let i of marks) {
    sum += i;
}

let avg = sum/marks.length;
console.log(avg);



// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer

let items = [250,645,300,900,50];
let offer = 0;

console.log("Value before offer");
console.log(items);

for (let index = 0; index < items.length; index++) {
   offer = items[index]/10;
   items[index] -= offer;
}

console.log("Value after offer");

console.log(items);

// for (let val of items) {
//     console.log(val);
// }



// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let arr = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
console.log(arr.shift());
arr.splice(2,1,"Ola");
console.log(arr);
arr.push("Amazon");
console.log(arr);