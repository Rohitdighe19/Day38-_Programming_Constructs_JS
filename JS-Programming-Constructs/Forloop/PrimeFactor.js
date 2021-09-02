const readline = require("prompt-sync");
const prompt=readline();

let n = prompt("Enter number : ");
console.log("Prime factors of " + n);

for(let i = 2; i <= n; i++) {

    while ( n % i == 0) {
           console.log(i);
           n =n / i;
    }
}
if (n>2){
    console.log(n);
}