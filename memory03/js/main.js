let game = new Game();
var cardsArray = game.board.cards;

$('.card').each(function () {
    var img = this;
    img.addEventListener('click', showPicture);
    
});

function showPicture(e){
    let target = e.target;
    let id = target.getAttribute("id");
    $(`#${id} img`).show();
    console.log(id);
}

 $("img").hide();
// $(".card").click((e)=>{
    // let target = e.target;
    // let place = target.getAttribute("place");
    // $(place >"img").show();
    
// })


