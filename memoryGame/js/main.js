let game = new Game();
var cardsArray = game.board.cards;
$(document).ready(() => {
    let counter = 1;
    for (let i = 0; i < 12; i++) {
       $(`p${counter}`).css('background-image',cardsArray[i].front);
        counter++;
    }
})
