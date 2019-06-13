const P1 = '../images/anemone.jpg';
const P2 = '../images/barbary.jpg';
const P3 = '../images/chamomile.jpg';
const P4 = '../images/crocus.jpg';
const P5 = '../images/orchid.jpg';
const P6 = '../images/salvia.jpg';
var arrayOfPicturs = [P1, P1, P2, P2, P3, P3, P4, P4, P5, P5, P6, P6];
class Card {

    constructor() {
        this.position = "back";
        this.front = this.pickfrontImg();
    }
    pickfrontImg() {
        
        let index = Math.floor(Math.random() * arrayOfPicturs.length);
        let picked = arrayOfPicturs[index];
        delete arrayOfPicturs[index];
        arrayOfPicturs[index] = arrayOfPicturs.pop();
        
        return picked;
    }
}