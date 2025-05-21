//  Create a game where you start with any random game number. Ask the user to keep
//  guessing the game number until the user enters correct value.




//practice Q1
// let gameNum = Math.floor(Math.random() * 100);

// let userNum = prompt("Guess the game number :");

// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong number . Guess game number again :");
// }

// console.log("Congratulations, You entered the right number " + userNum);





// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length. 
// eg: user name = “shradhakhapra” , username should be “@shradhakhapra13

//practice Q2

let fullName = prompt("Enter username :");

let userName = "@" + fullName + fullName.length;

console.log(userName);

