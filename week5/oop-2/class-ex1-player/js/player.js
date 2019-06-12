class Player {
    constructor(name, score = 0) {
        this.name = name;
    }
    didWin() {
        return (this.score > 30) ;
           
    }
    checkIfPlayerWon(){
        if (this.didWin()){
            return console.log(`${this.name} WON!!`);
        }
        else 
         return console.log(`${this.name} didn't won yet`);
    }
}

let omer = new Player("omer");
omer.score = 32;
omer.checkIfPlayerWon();