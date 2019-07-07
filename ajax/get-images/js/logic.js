$(document).ready(function () {
    //adding event listeners
    $('.addImage').bind('click', addImage);
})
let counter= 0;
addImage =function(){
  $.ajax({
    type: "GET",
    url: "https://itc-colors.appspot.com/get_images",
    data:{},
    dataType: "json",
    success: function (responsemsg){
        console.log(responsemsg[counter]);
        $(".img").css('background-image',`url(${responsemsg[counter]})`);
        if (counter<5){
            counter++
        }else {
            counter=0;
        }
    },
    error: function(msg){
        console.log("error");
    }
    
  })
}
