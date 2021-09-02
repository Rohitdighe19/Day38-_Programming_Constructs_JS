function palindromeChecker(firstNumber, secondNumber) {
    reverse = 0;
    remainder = 0;
    while (secondNumber > 0) {
        remainder = Math.floor(secondNumber % 10);
        reverse = reverse * 10 + remainder;
        secondNumber = Math.floor(secondNumber / 10);
    }
    if (firstNumber == reverse) {
        return true;
    } else {
        return false;
    }
}
const prompt = require('prompt-sync')();
let firstNumber = parseInt(prompt("Enter the first number : "));
let secondNumber = parseInt(prompt("Enter the second number : "));
console.log(palindromeChecker(firstNumber, secondNumber));