class Jewel01{
    constructor(jewel , price , karat ,  size,amount ){
        this.jewel = jewel;
        this.price = price;
        this.karat = karat;
        this.size = size;
        this.amount = amount;
    }
}

let goldRing = new Jewel01 ("ring",250, 14,"small",1000);
let neckless = new Jewel01 ("neckless",1250, 14,"big",1000);
let earing = new Jewel01 ("earing",350, 14,"long",1000);
let bracelet01 = new Jewel01 ("bracelet",550, 14,"medium",1000);