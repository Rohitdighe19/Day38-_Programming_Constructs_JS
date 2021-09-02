function checkDate() {
    const prompt = require('prompt-sync')();
    let date = prompt("Enter the date : ");
    let month = prompt("Enter the month number : ");
    console.log(month + " " + date);
    if (month == 6 && date < 21) {
        console.log("True");
    } else if (month == 3 && date >= 20 && date <= 31) {
        console.log("True");
    } else if (month == 4 && date >= 1 && date <= 30) {
        console.log('True');
    } else if (month == 5 && date >= 1 && date <= 31) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkDate();