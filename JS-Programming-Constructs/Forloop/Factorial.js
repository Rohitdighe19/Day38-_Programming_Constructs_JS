const readline = require("prompt-sync");
const prompt=readline();

let n = prompt("Enter number : ");
let fact=1;
for(let i=1;i<=n;i++){
    fact=fact*i;
}
console.log("Factorial of "+n+" : "+fact)