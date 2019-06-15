$('.card').each(function () {
    var img = this;
    img.addEventListener('click', showPicture);
    
});

function showPicture(){
   ("img").show(); 
}

$("img").hide();
// $(".card").click((e)=>{
//     let target = e.target;
//     let place = target.getAttribute("place");
//     $(place >"img").show();
    
// })


