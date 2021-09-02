function flipCoin(){
    let coinResult = Math.floor(Math.random() * 2);
    if(coinResult == 1){
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}
flipCoin();