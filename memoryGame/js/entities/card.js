let p1 = '../images/anemone.jpg';
let p2 = '../images/barbary.jpg';
let p3 = '../images/chamomile.jpg';
let p4 = '../images/crocus.jpg';
let p5 = '../images/orchid.jpg';
let p6 = '../images/salvia.jpg';
var arrayOfPicturs = [p1, p1, p2, p2, p3, p3, p4, p4, p5, p5, p6, p6];
class Card {

    constructor() {
         this.front = this.pickfrontImg();


    }
    pickfrontImg() {
        let index = Math.floor(Math.random() * arrayOfPicturs.length);
        let picked = arrayOfPicturs[index];
        delete arrayOfPicturs[index];
        return picked;
    }
}