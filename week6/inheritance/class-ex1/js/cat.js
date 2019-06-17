class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}
class Cat extends Animal{
    constructor(name,isFriendly){
        super(name,"cat");
        this.isFriendly = isFriendly;
        this.am="am not";
        if(this.isFriendly){
            this.am = "am";
        }
    
    }
        
    describe(){
        console.log(`I am ${this.name} and I ${this.am} a freindly cat`);
    }
}

let milli = new Cat("milli", false);
milli.describe();