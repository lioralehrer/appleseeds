// generate divs contain the cards:

class board {
    constructor() {

    }

}
function generateCards(numbersOfCards) {
    document.getElementById("header").style.display = "none";
    document.getElementById("start").style.display = "none";
    for (let i = 0; i < numbersOfCards; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        document.getElementById("board").appendChild(card);
    };
}

document.getElementById("easy").addEventListener('click', function () { generateCards(12) });
document.getElementById("medium").addEventListener('click', function () { generateCards(18) });
document.getElementById("hard").addEventListener('click', function () { generateCards(24) });
