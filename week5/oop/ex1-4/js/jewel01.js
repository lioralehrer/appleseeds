
class Jewel{
    constructor(jewel , price){
        this.jewel = jewel;
        this.price = price;
    }
}

function getHigherPrice(jewel01 , jewel02 ){
    
    if (jewel01.price > jewel02.price){
        return jewel01.price;
    }
    else 
    return jewel02;
}

let ring = new Jewel("ring", 200);
let bracelet = new Jewel("bracelet", 300);
getHigherPrice(ring, bracelet); 