let game = new Game();
var cardsArray = game.board.cards;
$(document).ready(() => {
    let counter = 1;
    let matchCounter = 0;
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 3; y++) {
            $(`#p${counter}`).append(`<img src=${cardsArray[y][x].front} />`);
            counter++;
        }
    }
    $(".playAgain").click(function(){
        location.reload();
    });

    
    $('.card').each(function () {
        var img = this;
        img.addEventListener('click', showPicture);
    });

    let count = 0;
    function showPicture(e) {
        if (count < 2) {
            let target = e.target;
            let id = target.getAttribute("id");
            let place = $(`#${id} img`).attr("src");
            $(`#${id} img`).show();
            keepThisPlace(place);
            count++
            if (count === 2) {
                checkmatching();
                count = 0;
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
            matchCounter++;
            $(`img[src*="${matchingArr[0]}"]`).parent().fadeTo("slow", 0);
            $(`img[src*="${matchingArr[0]}"]`).parent().promise().done(function () { sayWin() });

        }
        else {
            setTimeout(function () { $("img").hide(); }, 700);
        }
        matchingArr.pop();
        matchingArr.pop();

    }

    $("img").hide();
    function sayWin() {
        if (matchCounter === 6) {
            $(".playAgain").show();
            // $("modal-wrapper").css("display","");
        }
    }
})
