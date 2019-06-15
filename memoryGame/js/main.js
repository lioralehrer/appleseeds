let game = new Game();
var cardsArray = game.board.cards;
$(document).ready(() => {
    let counter = 1;
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 3; y++) {
            $(`#p${counter}`).css('background-image', `url(${cardsArray[y][x].front})`);
            // $(`#p${counter}`).hide();
            counter++;
        }

    }
})
