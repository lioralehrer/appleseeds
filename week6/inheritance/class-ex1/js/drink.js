class Drink {
    constructor(title, isHot) {
        this.title = title;
        this.isHot = isHot;
    }
}

class Coffee extends Drink {
    constructor(title, shots, withmilk) {
        super(title, true);
        this.shots = shots;
        this.withmilk = withmilk;
        this.with = "without";
        if (this.withmilk){
            this.with = "with";
        }
    }
    printeInstructions() {
        console.log(`Make ${this.title} with ${this.shots} shots  and ${this.with} milk`);
    }
}
let cola = new Drink("cola",false);
let espresso = new Coffee("espresso", 2,false);
let capuchino = new Coffee("capuchino",1,true);
espresso.printeInstructions();
capuchino.printeInstructions();

