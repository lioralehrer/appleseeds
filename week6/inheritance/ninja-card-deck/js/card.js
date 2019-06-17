class Card {
    constructor(namber, shape) {
        this.namber = namber;
        this.shape = shape;
    }
    toSting() {
        let myCard = `${this.namber} of ${this.shape}`
        return myCard;
    }
    getNext() {
        let myCard;
        if (this.number < 12) {
            myCard = `${this.number + 1} of ${this.shape}`;
        }
        else {
            myCard = `${1} of ${this.shape}`;
        }
        return myCard;
    }
    static getAce(shape) {
        return new Card("Ace", shape);
    }
    static getShapes() {
        let shapes = ["heart", "clubs", "diamond", "leaf"];
        return shapes;

    }

}
function createDeck() {
    let deck = [];
    let shapes = Card.getShapes();
    for (let i = 0; i < 4; i++) {
        for (let j = 2; j < 14; j++) {
            deck.push(new Card(j, shapes[i]));

        }
    }
    for (let i = 0; i<4;i++){
        deck.push(new Card ("Ace",shapes[i]));
    }
    console.log(deck);

}
createDeck();

