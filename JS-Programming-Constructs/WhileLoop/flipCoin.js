function flipCoin() {
    let i = 1;
    while (i <= 11) {
        let coinResult = Math.floor(Math.random() * 2);
        if (coinResult == 1) {
            console.log(i + ": HEADS");
        } else {
            console.log(i + ": TAILS");
        }
        i++;
    }
}
flipCoin();
