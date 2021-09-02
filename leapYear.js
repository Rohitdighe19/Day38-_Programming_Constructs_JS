function checkLeapYear(){
    const prompt = require('prompt-sync')();
    let year  = prompt("Enter the Year : ")
    if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log("True");
    } else {
        console.log("False");
    }
}
checkLeapYear();