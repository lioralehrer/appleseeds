class Account {
    constructor(sum) {
        this.sum = sum;
    }
    deposit(value) {
        this.sum += value;
    }
    withdraw(value) {
        this.sum -= value;
    }
    canWithdraw(value) {
        if (this.sum - value >= 0) {
            return true;
        }
        else return false
    }

}
function lottery(account)
{
    let canWithdraw100 = account.canWithdraw(100);
    if (!canWithdraw100) {
        console.log("can't withdraw 100 Nis");

    }
    else {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        let randomWinner = Math.random() >= 0.5;
        if (randomWinner) {
            account.sum += randomNum;
        }
        else account.sum -= randomNum;
    }
}
let myAccount = new Account(1000);
for (let i = 0; i < 5; i++) {
    lottery(myAccount);
}
console.log(myAccount.sum);