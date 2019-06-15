// let game = new Game();
// var cardsArray = game.board.cards;

$('.card').each(function () {
    var img = this;
    img.addEventListener('click', showPicture);
});

let counter = 0;
function showPicture(e) {
    if (counter < 2) {
        let target = e.target;
        let id = target.getAttribute("id");
        let place = target.getAttribute("place");
        $(`#${id} img`).show();
        keepThisPlace(place);
        counter++
        if (counter === 2) {
            checkmatching();
            counter = 0;
        }
    }

}
let matchingArr = [];
function keepThisPlace(place) {
    matchingArr.push(place);
    return matchingArr;
}
function checkmatching() {
    if (matchingArr[0] === matchingArr[1]) {
        $(`.card[place=${matchingArr[0]}]`).fadeTo("slow",0);
       
    }
    else {
        setTimeout(function(){ $("img").hide();},700);
    }
    matchingArr.pop();
    matchingArr.pop();
}

$("img").hide();



