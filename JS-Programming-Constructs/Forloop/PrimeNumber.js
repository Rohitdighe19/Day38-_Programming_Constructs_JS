const readline = require("prompt-sync");
const prompt=readline();

let n = prompt("Enter number : ");
let i;
for(i=2;i<n;i++){
    if(n%i==0){
        console.log("Not a Prime Number");
        break;
    }
}
if(i==n){
    console.log("Prime Number");
}
