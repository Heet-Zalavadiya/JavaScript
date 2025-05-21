//String are immutable in JavaScript
//Arrays are mutable in JavaScript

let foodItems = ["potato", "apple", "litchi", "tamato"];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);
//
let deleatedItem = foodItems.pop();
console.log(foodItems);
console.log(deleatedItem);
//
console.log(foodItems.toString());
let marks = [97, 81, 20, 12, 100];
console.log(marks.toString());
//
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeores = ["shaktiman", "krish"];
let heroes = marvelHeroes.concat(dcHeroes, indianHeores);
console.log(heroes);//concate heroes do not change main hero it returns new array
//
marvelHeroes.unshift("antman");
console.log(marvelHeroes);
let newMarvelHeroes = marvelHeroes.shift();
console.log("deleted", newMarvelHeroes);
//
console.log(marvelHeroes.slice(1, 3));//slice
//
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);
console.log(arr);
//if we have add element not delete
arr.splice(2,0,201);
//Delete element
arr.splice(3,1);
//Replace element
arr.splice(3,1,101);
//
arr.splice(4);
//
arr.splice();