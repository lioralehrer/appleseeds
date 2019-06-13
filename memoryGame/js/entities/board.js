
class Board {
    constructor(height, width) {
        this.cards =this.createBoardOfCards(height, width);
    }
    createBoardOfCards(height, width) {
        let cards = [];
        for (let i = 0; i < height; i++) {
            let rowOfCards = [];
            for (let j = 0; j < width; j++) {
                rowOfCards.push(new Card());

            }
            cards.push(rowOfCards);
        }
        return cards;
    }
}