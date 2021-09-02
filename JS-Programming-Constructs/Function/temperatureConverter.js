function temperatureConverter() {
    const prompt = require('prompt-sync')();
    let choice = prompt("Press 1 for degC to degF\nPress 2 for degF to degC\n");
    let degC;
    let degF;
    if (choice == 1) {
        degC = prompt("Enter the temperature in degC : ");
        degF = (degC * 9 / 5) + 32;
        console.log(`Temperature in degF is : ${degF}`);
    } else if (choice == 2) {
        degF = prompt("Enter the temperature in degF : ");
        degC = (degF - 32) * 5 / 9;
        console.log("Temperature in degC : " + degC);
    } else {
        console.log("INVALID INPUT !!!");
    }
}
temperatureConverter();
