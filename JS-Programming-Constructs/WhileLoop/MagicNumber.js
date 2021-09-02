// Problem 2 : Find the Magic Number
//             a. Ask the user to think of a number n between 1 to 100
//             b. Then check with the user if the number is less then n/2 or greater
//             c. Repeat till the Magic Number is reached..

function magicNumber(userNumber) {
    const prompt = require('prompt-sync')();
    let guessNumber = parseInt(prompt("Guess the number : "));
    flag = true;
    while (flag) {
        if (guessNumber == userNumber) {
            console.log("Right Guess !!!");
            flag = false;
        } else if (guessNumber < userNumber) {
            console.log("Guess Number is less than User Number");
            magicNumber(userNumber);
        } else if (guessNumber > userNumber) {
            console.log("Guess Number is greater than User Number");
            magicNumber(userNumber);
        }
    }
}
let userNumber = Math.floor(Math.random() * 99 + 1);
console.log(userNumber);
magicNumber(userNumber);